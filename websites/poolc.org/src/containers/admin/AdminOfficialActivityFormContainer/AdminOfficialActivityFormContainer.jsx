import { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import AdminOfficialActivity from '../../../components/admin/AdminOfficialActivity/AdminOfficialActivity';
import * as memberAPI from '../../../lib/api/member';
import * as officialActivityAPI from '../../../lib/api/officialActivity';
import { MENU } from '../../../constants/menus';
import { SUCCESS } from '../../../constants/statusCode';
import { useMessage } from '../../../hooks/useMessage';

const AdminOfficialActivityFormContainer = ({ history, match }) => {
  const message = useMessage();
  const { activityId } = match.params;
  const [searchMembers, setSearchMembers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    if (!activityId) return;
    officialActivityAPI.getOfficialActivity(activityId).then((response) => {
      if (response.status === SUCCESS.OK) setActivity(response.data);
    });
  }, [activityId]);

  const onSearchMember = useCallback((name) => {
    if (!name) {
      setSearchMembers([]);
      return;
    }
    memberAPI.searchMember({ name }).then((response) => {
      if (response.status === SUCCESS.OK) setSearchMembers(response.data.data);
    });
  }, []);

  const onCreateOfficialActivity = async (activity) => {
    setIsSubmitting(true);
    try {
      const response = await officialActivityAPI.createOfficialActivity(activity);
      if (response.status === 201) {
        message.success('공식 활동을 추가했습니다.');
        history.push(`/${MENU.ADMIN}/official-activities`);
        return true;
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const onUpdateOfficialActivity = async (id, nextActivity) => {
    setIsSubmitting(true);
    try {
      const response = await officialActivityAPI.updateOfficialActivity(id, nextActivity);
      if (response.status === SUCCESS.OK) {
        message.success('공식 활동을 수정했습니다.');
        history.push(`/${MENU.ADMIN}/official-activities`);
        return true;
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  if (activityId && activity === null) return null;

  return <AdminOfficialActivity activity={activity} searchMembers={searchMembers} onSearchMember={onSearchMember} onCreateOfficialActivity={onCreateOfficialActivity} onUpdateOfficialActivity={onUpdateOfficialActivity} isSubmitting={isSubmitting} />;
};

export default withRouter(AdminOfficialActivityFormContainer);
