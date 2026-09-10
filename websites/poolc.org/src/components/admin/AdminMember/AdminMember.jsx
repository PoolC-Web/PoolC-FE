import { useMemo, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { MENU } from '../../../constants/menus';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import { ListSearchToolbar } from '../../common/ListSearchToolbar/ListSearchToolbar';
import { SectionTabs } from '../../common/SectionTabs/SectionTabs';
import {
  EmptyResult,
  FilterControl,
  MemberIdentity,
  MemberListRow,
  MemberTable,
  MemberTableContainer,
  PageHeader,
  PendingActionButton,
  PendingActions,
  PendingDeleteButton,
  RoleSelect,
  TableHead,
  TabFilterRow,
  Title,
  ToolbarActions,
} from './AdminMember.styles';

const MEMBER_TAB = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  TERMINATED: 'TERMINATED',
};

const TERMINATED_ROLES = ['EXPELLED', 'QUIT'];
const INACTIVE_ROLES = ['INACTIVE', 'GRADUATED', 'COMPLETE'];

const getMemberTab = (member) => {
  if (member.role === 'UNACCEPTED') return MEMBER_TAB.PENDING;
  if (INACTIVE_ROLES.includes(member.role)) return MEMBER_TAB.INACTIVE;
  if (TERMINATED_ROLES.includes(member.role)) return MEMBER_TAB.TERMINATED;
  return MEMBER_TAB.ACTIVE;
};

const MemberTableHead = ({ showPendingActions }) => (
  <thead>
    <TableHead>
      <th>회원</th>
      <th>학과</th>
      <th>학번</th>
      <th>연락처</th>
      <th>{showPendingActions ? '조치' : '역할'}</th>
    </TableHead>
  </thead>
);

const MemberRow = ({ member, roles, showPendingActions, onAcceptMember, onWithdrawMember, onUpdateMemberRole, history }) => {
  const stopRowNavigation = (event) => event.stopPropagation();
  const moveToMemberDetail = () => history.push(`/${MENU.MEMBER}/${member.loginID}`);

  return (
    <MemberListRow onClick={moveToMemberDetail}>
      <td>
        <MemberIdentity>
          <strong>{member.name}</strong>
          <span>{member.loginID}</span>
        </MemberIdentity>
      </td>
      <td>{member.department || '-'}</td>
      <td>{member.studentID || '-'}</td>
      <td>{member.phoneNumber || '-'}</td>
      {showPendingActions && <td onClick={stopRowNavigation}>
        <PendingActions>
          <PendingActionButton onClick={() => onAcceptMember(member.loginID)}>승인</PendingActionButton>
          <PendingDeleteButton onClick={() => onWithdrawMember(member.loginID)}>삭제</PendingDeleteButton>
        </PendingActions>
      </td>}
      {!showPendingActions && <td onClick={stopRowNavigation}>
        <RoleSelect value={member.role || 'MEMBER'} onChange={(event) => onUpdateMemberRole({ loginID: member.loginID, role: event.target.value })} aria-label={`${member.name} 역할`}>
          {roles?.map((role) => (
            <option key={role.name} value={role.name}>
              {role.description}
            </option>
          ))}
        </RoleSelect>
      </td>}
    </MemberListRow>
  );
};

const AdminMember = ({ members, onAcceptMember, onWithdrawMember, onUpdateMemberRole, roles, history }) => {
  const [activeTab, setActiveTab] = useState(MEMBER_TAB.PENDING);
  const [keyword, setKeyword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');

  const tabCounts = useMemo(
    () =>
      members.reduce(
        (counts, member) => {
          counts[getMemberTab(member)] += 1;
          return counts;
        },
        { [MEMBER_TAB.PENDING]: 0, [MEMBER_TAB.ACTIVE]: 0, [MEMBER_TAB.INACTIVE]: 0, [MEMBER_TAB.TERMINATED]: 0 },
      ),
    [members],
  );

  const visibleMembers = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filteredMembers = members.filter((member) => {
      const isInTab = getMemberTab(member) === activeTab;
      const matchesRole = roleFilter === 'ALL' || member.role === roleFilter;
      const searchableValues = [member.name, member.loginID, member.email, member.studentID, member.department].filter(Boolean).join(' ').toLowerCase();
      const matchesQuery = !normalizedQuery || searchableValues.includes(normalizedQuery);

      return isInTab && matchesRole && matchesQuery;
    });

    if (activeTab === MEMBER_TAB.INACTIVE) {
      filteredMembers.sort((left, right) => Number(right.role === 'INACTIVE') - Number(left.role === 'INACTIVE'));
    }

    return filteredMembers;
  }, [activeTab, members, roleFilter, searchQuery]);
  const showPendingActions = activeTab === MEMBER_TAB.PENDING;

  const tabs = [
    { key: MEMBER_TAB.PENDING, label: `승인 대기 ${tabCounts[MEMBER_TAB.PENDING]}` },
    { key: MEMBER_TAB.ACTIVE, label: `활동 ${tabCounts[MEMBER_TAB.ACTIVE]}` },
    { key: MEMBER_TAB.INACTIVE, label: `비활동 ${tabCounts[MEMBER_TAB.INACTIVE]}` },
    { key: MEMBER_TAB.TERMINATED, label: `탈퇴/상실 ${tabCounts[MEMBER_TAB.TERMINATED]}` },
  ];

  return (
    <WhiteNarrowBlock>
      <PageHeader>
        <div>
          <Title>회원 목록</Title>
        </div>
        <ToolbarActions>
          <ListSearchToolbar value={keyword} placeholder="이름, 아이디, 학과 검색" onChange={setKeyword} onSubmit={() => setSearchQuery(keyword)} />
        </ToolbarActions>
      </PageHeader>
      <TabFilterRow>
        <SectionTabs items={tabs} activeKey={activeTab} onChange={setActiveTab} />
        <FilterControl value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)} aria-label="회원 상태 필터">
          <option value="ALL">모든 상태</option>
          {roles?.map((role) => (
            <option key={role.name} value={role.name}>
              {role.description}
            </option>
          ))}
        </FilterControl>
      </TabFilterRow>
      <MemberTableContainer>
        <MemberTable>
          <MemberTableHead showPendingActions={showPendingActions} />
          <tbody>
            {visibleMembers.map((member) => (
              <MemberRow
                key={member.loginID}
                member={member}
                roles={roles}
                showPendingActions={showPendingActions}
                onAcceptMember={onAcceptMember}
                onWithdrawMember={onWithdrawMember}
                onUpdateMemberRole={onUpdateMemberRole}
                history={history}
              />
            ))}
          </tbody>
        </MemberTable>
        {visibleMembers.length === 0 && <EmptyResult>조건에 맞는 회원이 없습니다.</EmptyResult>}
      </MemberTableContainer>
    </WhiteNarrowBlock>
  );
};

export default withRouter(AdminMember);
