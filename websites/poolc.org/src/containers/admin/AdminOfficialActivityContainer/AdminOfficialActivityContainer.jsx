import { useEffect, useState } from 'react';
import AdminOfficialActivityList from '../../../components/admin/AdminOfficialActivity/AdminOfficialActivityList';
import * as officialActivityAPI from '../../../lib/api/officialActivity';
import { SUCCESS } from '../../../constants/statusCode';
import { useMessage } from '../../../hooks/useMessage';

const AdminOfficialActivityContainer = () => {
  const message = useMessage();
  const [officialActivities, setOfficialActivities] = useState([]);

  useEffect(() => {
    officialActivityAPI.getOfficialActivities().then((response) => {
      if (response.status === SUCCESS.OK) setOfficialActivities(response.data);
    });
  }, []);

  const onDeleteOfficialActivity = async (id) => {
    const response = await officialActivityAPI.deleteOfficialActivity(id);
    if (response.status === 204) {
      setOfficialActivities((currentActivities) => currentActivities.filter((activity) => activity.id !== id));
      message.success('공식 활동을 삭제했습니다.');
    }
  };

  const onToggleQr = async (activity) => {
    const response = activity.qrEnabled
      ? await officialActivityAPI.disableOfficialActivityQr(activity.id)
      : await officialActivityAPI.generateOfficialActivityQr(activity.id);
    if (response.status !== SUCCESS.OK) return;

    setOfficialActivities((currentActivities) => currentActivities.map((currentActivity) => (
      currentActivity.id === activity.id
        ? (activity.qrEnabled ? response.data : { ...currentActivity, qrEnabled: true })
        : currentActivity
    )));
    message.success(activity.qrEnabled ? '출석 QR을 껐습니다.' : '출석 QR을 켰습니다.');
  };

  return <AdminOfficialActivityList officialActivities={officialActivities} onDeleteOfficialActivity={onDeleteOfficialActivity} onToggleQr={onToggleQr} />;
};

export default AdminOfficialActivityContainer;
