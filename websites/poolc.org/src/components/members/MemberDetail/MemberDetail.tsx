import { Suspense } from 'react';
import { Spin } from 'antd';
import { useParams } from 'react-router';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import MemberDetailContent from './MemberDetailContent';

const MemberDetail = () => {
  const { memberID } = useParams<{ memberID: string }>();

  return (
    <Block>
      <WhiteBlock>
        <Suspense fallback={<Spin />}>
          <MemberDetailContent loginId={memberID} />
        </Suspense>
      </WhiteBlock>
    </Block>
  );
};

export default MemberDetail;
