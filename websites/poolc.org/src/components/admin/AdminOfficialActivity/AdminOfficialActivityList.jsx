import { Modal, Popconfirm } from 'antd';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import ActionButton from '../../common/Buttons/ActionButton';
import { MENU } from '../../../constants/menus';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import {
  ActivityTable,
  ActivityTableContainer,
  ActivityTableRow,
  ActivityActions,
  DeleteButton,
  EmptyResult,
  PageHeader,
  TableHead,
  Title,
  ToolbarActions,
} from './AdminOfficialActivity.styles';

const AdminOfficialActivityList = ({ officialActivities, onDeleteOfficialActivity, onGenerateQr, history }) => {
  const [qr, setQr] = useState(null);

  const generateQr = async (id) => setQr(await onGenerateQr(id));

  return <WhiteNarrowBlock>
    <PageHeader>
      <Title>공식 활동</Title>
      <ToolbarActions><ActionButton to={`/${MENU.ADMIN}/official-activities/new`}>공식 활동 추가</ActionButton></ToolbarActions>
    </PageHeader>
    <ActivityTableContainer>
      <ActivityTable>
        <thead><TableHead><th>활동명</th><th>개최 날짜</th><th>인정 시간</th><th>조치</th></TableHead></thead>
        <tbody>
          {officialActivities.map((activity) => (
            <ActivityTableRow key={activity.id} onClick={() => history.push(`/${MENU.ADMIN}/official-activities/${activity.id}`)}>
              <td><strong>{activity.title}</strong></td>
              <td>{activity.activityDate}</td>
              <td>{activity.recognizedHours}시간</td>
              <td onClick={(event) => event.stopPropagation()}>
                <ActivityActions>
                  <ActionButton type="button" onClick={() => generateQr(activity.id)}>출석QR</ActionButton>
                  <ActionButton to={`/${MENU.ADMIN}/official-activities/edit/${activity.id}`}>편집</ActionButton>
                  <Popconfirm title="공식 활동 삭제" description={`'${activity.title}' 기록을 삭제하시겠습니까?`} okText="삭제" cancelText="취소" okButtonProps={{ danger: true }} onConfirm={() => onDeleteOfficialActivity(activity.id)}>
                    <DeleteButton>삭제</DeleteButton>
                  </Popconfirm>
                </ActivityActions>
              </td>
            </ActivityTableRow>
          ))}
        </tbody>
      </ActivityTable>
      {officialActivities.length === 0 && <EmptyResult>등록된 공식 활동이 없습니다.</EmptyResult>}
    </ActivityTableContainer>
    <Modal title="공식 활동 출석 QR" open={qr !== null} footer={null} onCancel={() => setQr(null)}>
      {qr && <img src={qr.qrImageDataUrl} alt="공식 활동 출석 QR" style={{ display: 'block', width: '100%', maxWidth: 360, margin: '0 auto' }} />}
    </Modal>
  </WhiteNarrowBlock>;
};

export default withRouter(AdminOfficialActivityList);
