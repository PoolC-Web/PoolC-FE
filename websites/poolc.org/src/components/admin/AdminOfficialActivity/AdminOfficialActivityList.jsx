import { Dropdown, Modal, Popconfirm } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import ActionButton from '../../common/Buttons/ActionButton';
import { MENU } from '../../../constants/menus';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import {
  ActivityTable,
  ActivityTableContainer,
  ActivityTableRow,
  ActivityActions,
  ActionMenuButton,
  AttendanceSourceBadge,
  DeleteButton,
  EmptyResult,
  PageHeader,
  TableHead,
  Title,
  ToolbarActions,
  QrToggleButton,
} from './AdminOfficialActivity.styles';

const AdminOfficialActivityList = ({ officialActivities, onDeleteOfficialActivity, onToggleQr, history }) => {
  const confirmDelete = (activity) => Modal.confirm({
    title: '공식 활동 삭제',
    content: `'${activity.title}' 기록을 삭제하시겠습니까?`,
    okText: '삭제',
    cancelText: '취소',
    okButtonProps: { danger: true },
    onOk: () => onDeleteOfficialActivity(activity.id),
  });
  const mobileActionItems = (activity) => [
    { key: 'qr', label: activity.qrEnabled ? 'QR 끄기' : 'QR 켜기', onClick: () => onToggleQr(activity) },
    { key: 'edit', label: '편집', onClick: () => history.push(`/${MENU.ADMIN}/official-activities/edit/${activity.id}`) },
    { key: 'delete', label: '삭제', danger: true, onClick: () => confirmDelete(activity) },
  ];

  return <WhiteNarrowBlock>
    <PageHeader>
      <Title>공식 활동</Title>
      <ToolbarActions><ActionButton to={`/${MENU.ADMIN}/official-activities/new`}>공식 활동 추가</ActionButton></ToolbarActions>
    </PageHeader>
    <ActivityTableContainer>
      <ActivityTable>
        <thead><TableHead><th>활동</th><th>개최일</th><th>인정 시간</th><th>QR 출석</th><th>조치</th></TableHead></thead>
        <tbody>
          {officialActivities.map((activity) => (
            <ActivityTableRow key={activity.id} onClick={() => history.push(`/${MENU.ADMIN}/official-activities/${activity.id}`)}>
              <td onClick={() => history.push(`/${MENU.ADMIN}/official-activities/${activity.id}`)}><strong>{activity.title}</strong></td>
              <td onClick={() => history.push(`/${MENU.ADMIN}/official-activities/${activity.id}`)}>{activity.activityDate}</td>
              <td onClick={() => history.push(`/${MENU.ADMIN}/official-activities/${activity.id}`)}>{activity.recognizedHours}시간</td>
              <td onClick={() => history.push(`/${MENU.ADMIN}/official-activities/${activity.id}`)}><AttendanceSourceBadge $source={activity.qrEnabled ? 'QR' : 'MANUAL'}>{activity.qrEnabled ? 'QR 켜짐' : 'QR 꺼짐'}</AttendanceSourceBadge></td>
              <td onClick={(event) => event.stopPropagation()}>
                <ActivityActions>
                  {activity.qrEnabled
                    ? <QrToggleButton type="button" $enabled onClick={() => onToggleQr(activity)}>QR 끄기</QrToggleButton>
                    : <ActionButton type="button" onClick={() => onToggleQr(activity)}>QR 켜기</ActionButton>}
                  <ActionButton to={`/${MENU.ADMIN}/official-activities/edit/${activity.id}`}>편집</ActionButton>
                  <Popconfirm title="공식 활동 삭제" description={`'${activity.title}' 기록을 삭제하시겠습니까?`} okText="삭제" cancelText="취소" okButtonProps={{ danger: true }} onConfirm={() => onDeleteOfficialActivity(activity.id)}>
                    <DeleteButton>삭제</DeleteButton>
                  </Popconfirm>
                </ActivityActions>
                <Dropdown menu={{ items: mobileActionItems(activity) }} trigger={['click']}>
                  <ActionMenuButton type="button" aria-label={`${activity.title} 추가 조치`}><MoreOutlined /></ActionMenuButton>
                </Dropdown>
              </td>
            </ActivityTableRow>
          ))}
        </tbody>
      </ActivityTable>
      {officialActivities.length === 0 && <EmptyResult>등록된 공식 활동이 없습니다.</EmptyResult>}
    </ActivityTableContainer>
  </WhiteNarrowBlock>;
};

export default withRouter(AdminOfficialActivityList);
