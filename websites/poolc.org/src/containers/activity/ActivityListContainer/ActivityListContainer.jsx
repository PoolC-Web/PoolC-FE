import { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ActivityList from '../../../components/activity/ActivityList/ActivityList';
import * as activityAPI from '../../../lib/api/activity';
import { MENU } from '../../../constants/menus';
import { SUCCESS } from '../../../constants/statusCode';

const ActivityListContainer = ({ location, history }) => {
  const currentLocation = location.search.replace('?semester=', '');
  const member = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);

  const [activities, setActivities] = useState(null);
  const [semesters, setSemesters] = useState(null);
  const loadedSemesterRef = useRef(null);

  useEffect(() => {
    let active = true;
    activityAPI.getActivityYears().then((res) => {
      if (!active) return;
      if (res.status === SUCCESS.OK) {
        setSemesters(res.data.data);
      }
    });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (semesters === null) return;
    const semester = currentLocation || semesters[0];
    if (!semester) {
      activityAPI.getActivities().then((res) => {
        setActivities(res.data.data);
        setLoading(false);
      });
      return;
    }
    if (!currentLocation) {
      history.replace(`/${MENU.ACTIVITIES}?semester=${semester}`);
    }
    if (loadedSemesterRef.current === semester) return;
    loadedSemesterRef.current = semester;
    setLoading(true);
    activityAPI.getActivitiesByYears(semester).then((res) => {
      setActivities(res.data.data);
      setLoading(false);
    });
  }, [currentLocation, history, semesters]);

  const onToggleRegisterActivity = (activityID, members, setMembers) => {
    activityAPI
      .applyActivity(activityID)
      .then((res) => {
        if (res.status === SUCCESS.OK) {
          if (!members.includes(member.user.memberId)) {
            setMembers(res.data.memberLoginIds);
            alert('성공적으로 신청되었습니다.');
          }
          if (members.includes(member.user.memberId)) {
            setMembers(res.data.memberLoginIds);
            alert('성공적으로 신청 취소되었습니다.');
          }
        }
      })
      .catch(() => {
        alert(e.response?.data?.message);
      });
  };

  const onDeleteActivity = (activityID) => {
    activityAPI.deleteActivity(activityID).then((res) => {
      if (res.status === SUCCESS.OK) {
        setActivities(activities.filter((activity) => activity.id !== activityID));
      }
    });
  };

  const onChangeSemester = (semester) => {
    history.push(`/${MENU.ACTIVITIES}?semester=${semester}`);
  };

  return (
    <ActivityList
      loading={loading}
      activities={activities}
      semesters={semesters}
      currentLocation={currentLocation}
      onChangeSemester={onChangeSemester}
      onToggleRegisterActivity={onToggleRegisterActivity}
      onDeleteActivity={onDeleteActivity}
      member={member}
    />
  );
};

export default withRouter(ActivityListContainer);
