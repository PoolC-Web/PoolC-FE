import { useEffect, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import koKR from 'antd/locale/ko_KR';
import useInput from '../../../hooks/useInput';
import ActionButton from '../../common/Buttons/ActionButton';
import { notEmptyValidation } from '../../../lib/utils/validation';
import {
  Description,
  FormContent,
  FormGrid,
  FormSection,
  Item,
  SectionTitle,
  StyledActionButton,
  StyledForm,
  StyledInput,
  SubmitArea,
  Title,
  TitleContainer,
} from '../AdminInfo/AdminInfo.styles';
import { MemberSelect, QrAttendanceBadge } from './AdminOfficialActivity.styles';
import { ButtonContainer, MemberBlock, MemberContainer, MemberInfo, ProjectDatePicker } from '../AdminProjectForm/AdminProjectForm.styles';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import { dayjs } from '../../../lib/utils/dayjs';

const AdminOfficialActivity = ({ activity, searchMembers, onSearchMember, onCreateOfficialActivity, onUpdateOfficialActivity, isSubmitting }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedMembers, setSelectedMembers] = useState(() => activity ? activity.participants.map((member) => ({ loginID: member.loginId, name: member.name || member.loginId, studentID: '', department: '', source: member.source })) : []);
  const [title, onChangeTitle] = useInput(activity ? activity.title : '', notEmptyValidation);
  const [activityDate, setActivityDate] = useState(activity ? activity.activityDate : dayjs().format('YYYY-MM-DD'));
  const [recognizedHours, setRecognizedHours] = useState(activity ? String(activity.recognizedHours) : '');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => onSearchMember(searchValue.trim()), 250);
    return () => window.clearTimeout(timeoutId);
  }, [onSearchMember, searchValue]);

  const selectMember = (loginId) => {
    const member = searchMembers.find((item) => item.loginID === loginId);
    if (member) {
      setSelectedMembers((currentMembers) => currentMembers.some((item) => item.loginID === loginId) ? currentMembers : [...currentMembers, { ...member, source: 'MANUAL' }]);
    }
    setSearchValue('');
  };

  const selectedMemberIds = selectedMembers.map((member) => member.loginID);
  const selectableMembers = searchMembers.filter((member) => !selectedMemberIds.includes(member.loginID));

  const submit = async (event) => {
    event.preventDefault();
    if (selectedMembers.length === 0 || !activityDate || !title.trim() || Number(recognizedHours) <= 0) {
      return;
    }
    const request = {
      memberLoginIds: selectedMemberIds,
      activityDate,
      title: title.trim(),
      recognizedHours: Number(recognizedHours),
    };
    const saved = activity ? await onUpdateOfficialActivity(activity.id, request) : await onCreateOfficialActivity(request);
    if (saved && !activity) {
      setSelectedMembers([]);
      setSearchValue('');
      onChangeTitle({ target: { value: '' } });
      setActivityDate(dayjs().format('YYYY-MM-DD'));
      setRecognizedHours('');
    }
  };

  return (
    <WhiteNarrowBlock>
      <FormContent>
        <TitleContainer><Title>{activity ? '공식 활동 편집' : '공식 활동 추가'}</Title></TitleContainer>
        <StyledForm>
          <FormGrid>
            <FormSection>
              <SectionTitle>활동 정보</SectionTitle>
              <Item>
                <label htmlFor="official-activity-title">활동명</label>
                <StyledInput id="official-activity-title" value={title} onChange={onChangeTitle} placeholder="예: 동아리 박람회 운영" />
              </Item>
              <Item>
                <label htmlFor="official-activity-date">개최 날짜</label>
                <ProjectDatePicker id="official-activity-date" locale={koKR.DatePicker} format="YYYY년 MM월 DD일" value={activityDate ? dayjs(activityDate) : null} onChange={(date) => setActivityDate(date ? date.format('YYYY-MM-DD') : '')} />
              </Item>
              <Item>
                <label htmlFor="official-activity-hours">인정 시간</label>
                <Description>개최 날짜가 속한 학기의 기타 활동으로 반영됩니다.</Description>
                <StyledInput id="official-activity-hours" type="number" min="0.1" step="0.5" value={recognizedHours} onChange={(event) => setRecognizedHours(event.target.value)} placeholder="예: 3" />
              </Item>
            </FormSection>
            <FormSection>
              <SectionTitle>대상 회원</SectionTitle>
              <Item>
                <label htmlFor="official-activity-member">회원 검색</label>
                <MemberSelect
                  id="official-activity-member"
                  showSearch
                  allowClear
                  filterOption={false}
                  searchValue={searchValue}
                  value={null}
                  placeholder="회원 이름으로 검색"
                  open={searchValue.trim().length > 0 || undefined}
                  onSearch={setSearchValue}
                  onSelect={selectMember}
                  onClear={() => setSearchValue('')}
                  options={selectableMembers.map((member) => ({ value: member.loginID, label: `${member.name} · ${member.studentID} · ${member.department}` }))}
                />
              </Item>
              <MemberContainer>
                <h4>참여자 목록</h4>
                {selectedMembers.length === 0 ? <p>참여자를 추가하세요.</p> : selectedMembers.map((member) => (
                  <MemberBlock key={member.loginID}>
                    <MemberInfo><strong>{member.name}</strong><span>{member.studentID}</span><span>{member.department}</span>{member.source === 'QR' && <QrAttendanceBadge>QR출석</QrAttendanceBadge>}</MemberInfo>
                    <ButtonContainer><ActionButton type="button" aria-label={`${member.name} 참여자 제거`} onClick={() => setSelectedMembers((currentMembers) => currentMembers.filter((item) => item.loginID !== member.loginID))}><DeleteOutlined /></ActionButton></ButtonContainer>
                  </MemberBlock>
                ))}
              </MemberContainer>
            </FormSection>
          </FormGrid>
          <SubmitArea><StyledActionButton disabled={selectedMembers.length === 0 || !activityDate || !title.trim() || Number(recognizedHours) <= 0 || isSubmitting} onClick={submit}>{activity ? '수정' : '추가'}</StyledActionButton></SubmitArea>
        </StyledForm>
      </FormContent>
    </WhiteNarrowBlock>
  );
};

export default AdminOfficialActivity;
