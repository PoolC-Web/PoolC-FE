import { useEffect, useState } from 'react';
import AdminPass from '../../../components/admin/AdminPass/AdminPass';
import * as memberAPI from '../../../lib/api/member';
import * as infoAPI from '../../../lib/api/info';
import { SUCCESS } from '../../../constants/statusCode';

const AdminPassContainer = () => {
  const [members, setMembers] = useState(null);
  const [poolcInfo, setPoolcInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([infoAPI.getPoolCInfo(), memberAPI.getMemberActivityHours()])
      .then(([infoResponse, membersResponse]) => {
        if (infoResponse.status === SUCCESS.OK) setPoolcInfo(infoResponse.data);
        if (membersResponse.status === SUCCESS.OK) setMembers(membersResponse.data.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onUpdateMinimumActivityHours = async (minimumActivityHours) => {
    if (!Number.isInteger(minimumActivityHours) || minimumActivityHours < 1 || poolcInfo === null) return;

    const nextPoolcInfo = { ...poolcInfo, minimumActivityHours };
    const response = await infoAPI.updatePoolCInfo(nextPoolcInfo);
    if (response.status === SUCCESS.OK) setPoolcInfo(nextPoolcInfo);
  };

  const onChangeExcepted = (loginID, isExcepted) => {
    memberAPI.updateMemberIsExcepted(loginID).then((res) => {
      if (res.status === SUCCESS.OK) {
        setMembers((currentMembers) => currentMembers.map((member) => (
          member.member.loginID === loginID ? { ...member, isExcepted: !isExcepted } : member
        )));
      }
    });
  };

  const onWithdraw = (loginID) => {
    memberAPI.updateMemberRole({ loginID, role: 'EXPELLED' }).then((res) => {
      if (res.status === SUCCESS.OK) {
        setMembers((currentMembers) => currentMembers.map((member) => (
          member.member.loginID === loginID ? { ...member, member: { ...member.member, role: 'EXPELLED' } } : member
        )));
      }
    });
  };

  return <AdminPass members={members} isLoading={isLoading} minimumActivityHours={poolcInfo?.minimumActivityHours ?? 10} onUpdateMinimumActivityHours={onUpdateMinimumActivityHours} onChangeExcepted={onChangeExcepted} onWithdraw={onWithdraw} />;
};

export default AdminPassContainer;
