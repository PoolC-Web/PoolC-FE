import ActionButton from '../../common/Buttons/ActionButton';
import { MENU } from '../../../constants/menus';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import { MemberIdentity, MemberListRow, MemberTable, MemberTableContainer, TableHead } from '../AdminMember/AdminMember.styles';
import { AttendanceSourceBadge, EmptyResult, PageHeader, Title, ToolbarActions } from './AdminOfficialActivity.styles';

const AdminOfficialActivityDetail = ({ activity }) => (
  <WhiteNarrowBlock>
    <PageHeader>
      <Title>{activity.title}</Title>
      <ToolbarActions><ActionButton to={`/${MENU.ADMIN}/official-activities/edit/${activity.id}`}>편집</ActionButton></ToolbarActions>
    </PageHeader>
    <p>{activity.activityDate} · 인정 시간 {activity.recognizedHours}시간</p>
    <MemberTableContainer>
      <MemberTable>
        <thead><TableHead><th>회원</th><th>학과</th><th>학번</th><th>연락처</th><th>출석 방식</th></TableHead></thead>
        <tbody>
          {activity.participants.map((participant) => (
            <MemberListRow key={participant.loginId}>
              <td><MemberIdentity><strong>{participant.name}</strong><span>{participant.loginId}</span></MemberIdentity></td>
              <td>{participant.department || '-'}</td>
              <td>{participant.studentId || '-'}</td>
              <td>{participant.phoneNumber || '-'}</td>
              <td><AttendanceSourceBadge $source={participant.source}>{participant.source === 'QR' ? 'QR출석' : '수동 기입'}</AttendanceSourceBadge></td>
            </MemberListRow>
          ))}
        </tbody>
      </MemberTable>
      {activity.participants.length === 0 && <EmptyResult>참여 학생이 없습니다.</EmptyResult>}
    </MemberTableContainer>
  </WhiteNarrowBlock>
);

export default AdminOfficialActivityDetail;
