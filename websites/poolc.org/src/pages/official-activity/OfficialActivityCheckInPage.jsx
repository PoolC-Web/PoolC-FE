import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Result, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as officialActivityAPI from '../../lib/api/officialActivity';
import { WhiteNarrowBlock } from '../../styles/common/Block.styles';

const CheckInPageBlock = styled(WhiteNarrowBlock)`
  min-height: 100vh;
`;

const OfficialActivityCheckInPage = ({ match }) => {
  const isLogin = useSelector((state) => state.auth.status.isLogin);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!isLogin) return;
    officialActivityAPI.checkInOfficialActivity(match.params.token)
      .then((response) => setResult(response.data.alreadyCheckedIn
        ? { status: 'info', title: '이미 출석 처리되었습니다.', subTitle: '이 QR의 출석 기록이 이미 있습니다.' }
        : { status: 'success', title: 'QR 출석이 완료되었습니다.', subTitle: '공식 활동이 인정되었습니다.' }))
      .catch((error) => setResult({ status: 'error', title: '출석을 처리하지 못했습니다.', subTitle: error.response?.data?.message || error.response?.data || 'QR 유효 시간을 확인해 주세요.' }));
  }, [isLogin, match.params.token]);

  return <CheckInPageBlock>{!isLogin ? <Result status="warning" title="로그인이 필요합니다" subTitle="PoolC에 로그인한 뒤 QR을 다시 스캔해 주세요." /> : result ? <Result {...result} /> : <Spin />}</CheckInPageBlock>;
};

export default withRouter(OfficialActivityCheckInPage);
