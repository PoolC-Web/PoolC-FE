import { createStyles } from 'antd-style';
import { Spin } from 'antd';
import { Suspense } from 'react';
import { Block, WhiteBlock } from '~/styles/common/Block.styles';
import MessageAllListContent from './MessageAllListContent';

const useStyles = createStyles(({ css }) => ({
  whiteBlock: css`
    padding: 30px 20px;
  `,
}));

export default function MessageAllListView() {
  const { styles } = useStyles();

  return (
    <Block>
      <WhiteBlock className={styles.whiteBlock}>
        <Suspense fallback={<Spin />}>
          <MessageAllListContent />
        </Suspense>
      </WhiteBlock>
    </Block>
  );
}
