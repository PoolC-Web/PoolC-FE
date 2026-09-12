import { useEffect, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import { SectionTabs } from '../../common/SectionTabs/SectionTabs';
import { MemberIdentity, PageHeader, Title, TitleMeta } from '../AdminMember/AdminMember.styles';
import {
  AttendanceSourceBadge, DeleteButton, EmptyResult, ParticipantTable, ParticipantTableContainer,
  ParticipantTableHead, ParticipantTableRow, ActivityTitleRow, HeaderQrDownload, HeaderQrImage,
} from './AdminOfficialActivity.styles';
import { dayjs } from '../../../lib/utils/dayjs';

const PARTICIPANT_TAB = { ALL: 'ALL', QR: 'QR', MANUAL: 'MANUAL' };
const formatAttendanceTime = (attendedAt) => (attendedAt ? dayjs.utc(attendedAt).utcOffset(9).format('YYYY년 MM월 DD일 HH:mm') : '-');

const AdminOfficialActivityDetail = ({ activity, onRemoveMember, onShowQr }) => {
  const [activeTab, setActiveTab] = useState(PARTICIPANT_TAB.ALL);
  const [qr, setQr] = useState(null);

  useEffect(() => {
    let cancelled = false;
    if (!activity.qrEnabled) {
      setQr(null);
      return undefined;
    }
    onShowQr().then((nextQr) => {
      if (!cancelled) setQr(nextQr);
    });
    return () => { cancelled = true; };
  }, [activity.id, activity.qrEnabled]);
  const qrParticipants = activity.participants.filter((participant) => participant.source === 'QR');
  const manualParticipants = activity.participants.filter((participant) => participant.source !== 'QR');
  const visibleParticipants = {
    [PARTICIPANT_TAB.ALL]: activity.participants,
    [PARTICIPANT_TAB.QR]: qrParticipants,
    [PARTICIPANT_TAB.MANUAL]: manualParticipants,
  }[activeTab];
  const participantTabs = [
    { key: PARTICIPANT_TAB.ALL, label: `전체 ${activity.participants.length}` },
    { key: PARTICIPANT_TAB.QR, label: `QR 출석 ${qrParticipants.length}` },
    { key: PARTICIPANT_TAB.MANUAL, label: `수동 출석 ${manualParticipants.length}` },
  ];
  const downloadQr = () => {
    if (!qr) return;
    const [, base64] = qr.qrImageDataUrl.split(',');
    const binary = window.atob(base64);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const objectUrl = window.URL.createObjectURL(new Blob([bytes], { type: 'image/png' }));
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = `${activity.title}-출석-QR.png`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    window.setTimeout(() => {
      link.remove();
      window.URL.revokeObjectURL(objectUrl);
    }, 0);
  };
  const confirmRemoveMember = (participant) => Modal.confirm({
    title: '참여자 제거',
    content: `${participant.name} 회원을 참여자 목록에서 정말 제거하시겠습니까?`,
    okText: '제거',
    cancelText: '취소',
    okButtonProps: { danger: true },
    onOk: () => onRemoveMember(participant.loginId),
  });

  return <WhiteNarrowBlock>
    <PageHeader style={{ position: 'relative', paddingRight: 96 }}>
      <div>
        <ActivityTitleRow><Title>{activity.title}</Title><TitleMeta>{activity.activityDate} · {activity.recognizedHours}시간 인정</TitleMeta></ActivityTitleRow>
      </div>
      {qr && <HeaderQrDownload><button type="button" aria-label="출석 QR 다운로드" title="QR 다운로드" onClick={downloadQr}><DownloadOutlined /></button><HeaderQrImage src={qr.qrImageDataUrl} alt={`${activity.title} 출석 QR`} /></HeaderQrDownload>}
    </PageHeader>
    <SectionTabs items={participantTabs} activeKey={activeTab} onChange={setActiveTab} />
    <ParticipantTableContainer>
      <ParticipantTable>
        <thead><ParticipantTableHead><th>회원</th><th>학번</th><th>연락처</th><th>출석 방식</th><th>출석 시간</th><th>조치</th></ParticipantTableHead></thead>
        <tbody>
          {visibleParticipants.map((participant) => (
            <ParticipantTableRow key={participant.loginId}>
              <td><MemberIdentity><strong>{participant.name}</strong><span>{participant.loginId}</span></MemberIdentity></td>
              <td>{participant.studentId || '-'}</td>
              <td>{participant.phoneNumber || '-'}</td>
              <td><AttendanceSourceBadge $source={participant.source}>{participant.source === 'QR' ? 'QR출석' : '수동 기입'}</AttendanceSourceBadge></td>
              <td>{formatAttendanceTime(participant.attendedAt)}</td>
              <td><DeleteButton type="button" aria-label={`${participant.name} 참여자 제거`} onClick={() => confirmRemoveMember(participant)}>삭제</DeleteButton></td>
            </ParticipantTableRow>
          ))}
        </tbody>
      </ParticipantTable>
      {visibleParticipants.length === 0 && <EmptyResult>해당하는 참여자가 없습니다.</EmptyResult>}
    </ParticipantTableContainer>
  </WhiteNarrowBlock>;
};

export default AdminOfficialActivityDetail;
