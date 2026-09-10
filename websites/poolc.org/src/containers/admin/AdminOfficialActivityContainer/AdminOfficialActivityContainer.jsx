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

  const onGenerateQr = async (id) => {
    const response = await officialActivityAPI.generateOfficialActivityQr(id);
    return response.data;
  };

  return <AdminOfficialActivityList officialActivities={officialActivities} onDeleteOfficialActivity={onDeleteOfficialActivity} onGenerateQr={onGenerateQr} />;
};

export default AdminOfficialActivityContainer;
