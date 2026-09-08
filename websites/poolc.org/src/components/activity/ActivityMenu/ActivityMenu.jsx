import { SectionMenu } from '../../common/SectionMenu/SectionMenu';
import { Spin } from 'antd';

const ActivityMenu = ({ loading, semesters, currentLocation }) => (
  <SectionMenu
    loading={loading}
    loadingFallback={<Spin className="poolc-inline-spinner" />}
    items={(semesters ?? []).map((semester) => ({
      label: semester,
      to: `/activities?semester=${semester}`,
      active: currentLocation === semester,
    }))}
  />
);

export default ActivityMenu;
