import { useEffect, useState } from 'react';
import AdminOfficialActivityDetail from '../../../components/admin/AdminOfficialActivity/AdminOfficialActivityDetail';
import * as officialActivityAPI from '../../../lib/api/officialActivity';
import { SUCCESS } from '../../../constants/statusCode';

const AdminOfficialActivityDetailContainer = ({ match }) => {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    officialActivityAPI.getOfficialActivity(match.params.activityId).then((response) => {
      if (response.status === SUCCESS.OK) setActivity(response.data);
    });
  }, [match.params.activityId]);

  return activity ? <AdminOfficialActivityDetail activity={activity} /> : null;
};

export default AdminOfficialActivityDetailContainer;
