import { useEffect, useState } from 'react';
import { Result, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as officialActivityAPI from '../../lib/api/officialActivity';
import { WhiteNarrowBlock } from '../../styles/common/Block.styles';

const OfficialActivityCheckInPage = ({ match }) => {
  const isLogin = useSelector((state) => state.auth.status.isLogin);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!isLogin) return;
    officialActivityAPI.checkInOfficialActivity(match.params.token)
      .then((response) => setResult({ status: 'success', title: 'QR 출석이 완료되었습니다.', subTitle: `${response.data.title} 활동이 인정되었습니다.` }))
      .catch((error) => setResult({ status: 'error', title: '출석을 처리하지 못했습니다.', subTitle: error.response?.data?.message || error.response?.data || 'QR 유효 시간을 확인해 주세요.' }));
  }, [isLogin, match.params.token]);

  return <WhiteNarrowBlock>{!isLogin ? <Result status="warning" title="로그인이 필요합니다" subTitle="PoolC에 로그인한 뒤 QR을 다시 스캔해 주세요." /> : result ? <Result {...result} /> : <Spin />}</WhiteNarrowBlock>;
};

export default withRouter(OfficialActivityCheckInPage);
