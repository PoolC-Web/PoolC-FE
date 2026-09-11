import { useCallback, useEffect, useState } from 'react';
import AdminOfficialActivityDetail from '../../../components/admin/AdminOfficialActivity/AdminOfficialActivityDetail';
import * as memberAPI from '../../../lib/api/member';
import * as officialActivityAPI from '../../../lib/api/officialActivity';
import { SUCCESS } from '../../../constants/statusCode';
import { useMessage } from '../../../hooks/useMessage';

const AdminOfficialActivityDetailContainer = ({ match }) => {
  const message = useMessage();
  const [activity, setActivity] = useState(null);
  const [searchMembers, setSearchMembers] = useState([]);

  useEffect(() => {
    officialActivityAPI.getOfficialActivity(match.params.activityId).then((response) => {
      if (response.status === SUCCESS.OK) setActivity(response.data);
    });
  }, [match.params.activityId]);

  const onSearchMember = useCallback((name) => {
    if (!name) {
      setSearchMembers([]);
      return;
    }
    memberAPI.searchMember({ name }).then((response) => {
      if (response.status === SUCCESS.OK) setSearchMembers(response.data.data);
    });
  }, []);

  const updateParticipants = async (memberLoginIds) => {
    if (!activity) return false;
    const response = await officialActivityAPI.updateOfficialActivity(activity.id, {
      memberLoginIds,
      activityDate: activity.activityDate,
      title: activity.title,
      recognizedHours: activity.recognizedHours,
    });
    if (response.status === SUCCESS.OK) {
      setActivity(response.data);
      return true;
    }
    return false;
  };

  const onAddMember = async (member) => {
    const added = await updateParticipants([...activity.participants.map((participant) => participant.loginId), member.loginID]);
    if (added) message.success(`${member.name} 회원을 참여자로 추가했습니다.`);
  };
  const onRemoveMember = async (loginId) => {
    const removed = await updateParticipants(activity.participants.filter((participant) => participant.loginId !== loginId).map((participant) => participant.loginId));
    if (removed) message.success('참여자를 제거했습니다.');
  };
  const onEnableQr = async () => {
    const response = await officialActivityAPI.generateOfficialActivityQr(activity.id);
    if (response.status === SUCCESS.OK) {
      setActivity((currentActivity) => ({ ...currentActivity, qrEnabled: true }));
      message.success('출석 QR을 켰습니다.');
      return response.data;
    }
    return null;
  };
  const onDisableQr = async () => {
    const response = await officialActivityAPI.disableOfficialActivityQr(activity.id);
    if (response.status === SUCCESS.OK) {
      setActivity(response.data);
      message.success('출석 QR을 껐습니다.');
    }
  };
  const onShowQr = async () => {
    const response = await officialActivityAPI.getOfficialActivityQr(activity.id);
    return response.status === SUCCESS.OK ? response.data : null;
  };

  return activity ? <AdminOfficialActivityDetail activity={activity} searchMembers={searchMembers} onSearchMember={onSearchMember} onAddMember={onAddMember} onRemoveMember={onRemoveMember} onEnableQr={onEnableQr} onDisableQr={onDisableQr} onShowQr={onShowQr} /> : null;
};

export default AdminOfficialActivityDetailContainer;
