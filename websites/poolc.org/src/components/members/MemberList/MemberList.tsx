import { Suspense } from 'react';
import { Spin } from 'antd';
import { PagePanel, PageShell } from '~/components/common/PageLayout/PageLayout';
import MemberListContent from './MemberListContent';

const MemberList = () => (
  <PageShell>
    <PagePanel>
      <Suspense fallback={<Spin />}>
        <MemberListContent />
      </Suspense>
    </PagePanel>
  </PageShell>
);

export default MemberList;
