import { Route, Switch, withRouter } from 'react-router-dom';
import AdminMenu from '../../components/admin/AdminMenu/AdminMenu';
import { MENU } from '../../constants/menus';
import AdminActivityContainer from '../../containers/admin/AdminActivityContainer/AdminActivityContainer';
import AdminHomeContainer from '../../containers/admin/AdminHomeContainer/AdminHomeContainer';
import AdminInfoContainer from '../../containers/admin/AdminInfoContainer/AdminInfoContainer';
import AdminInterviewContainer from '../../containers/admin/AdminInterviewContainer/AdminInterviewContainer';
import AdminInterviewTimeContainer from '../../containers/admin/AdminInterviewTimeContainer/AdminInterviewTimeContainer';
import AdminMemberContainer from '../../containers/admin/AdminMemberContainer/AdminMemberContainer';
import AdminPassContainer from '../../containers/admin/AdminPassContainer/AdminPassContainer';
import AdminOfficialActivityContainer from '../../containers/admin/AdminOfficialActivityContainer/AdminOfficialActivityContainer';
import AdminOfficialActivityFormContainer from '../../containers/admin/AdminOfficialActivityFormContainer/AdminOfficialActivityFormContainer';
import AdminOfficialActivityDetailContainer from '../../containers/admin/AdminOfficialActivityDetailContainer/AdminOfficialActivityDetailContainer';
import AdminProjectContainer from '../../containers/admin/AdminProjectContainer/AdminProjectContainer';
import AdminProjectFormContainer from '../../containers/admin/AdminProjectFormContainer/AdminProjectFormContainer';
import useAdminCheck from '../../hooks/useAdminCheck';
// 새로 만든거
import AdminBookFormNew from '../../components/admin/AdminBookFormNew/AdminBookForm';
import AdminBookNew from '../../components/admin/AdminBookNew/AdminBook';
import AdminGamification from '../../components/admin/AdminGamification/AdminGamification';
import { TwoColumnPageShell } from '../../components/common/PageLayout/PageLayout';

const AdminPage = ({ history }) => {
  const menus = [
    { name: '대시보드', url: '' },
    { name: '동아리 정보', url: '/info' },
    { name: '회원 목록', url: '/members' },
    { name: '최소 활동 기준', url: '/pass' },
    { name: '공식 활동', url: '/official-activities' },
    { name: '프로젝트', url: '/projects' },
    { name: '세미나·스터디', url: '/activities' },
    { name: '도서', url: '/books' },
    { name: '도감 관리', url: '/gamification' },
    { name: '면접 시간', url: '/interview-time' },
    { name: '지원 현황', url: '/interview' },
  ];

  useAdminCheck(history);

  return (
    <TwoColumnPageShell data-admin-layout="true">
      <AdminMenu menus={menus} />
      <Switch>
        <Route component={AdminInfoContainer} path={`/${MENU.ADMIN}/info`} exact />

        <Route component={AdminMemberContainer} path={`/${MENU.ADMIN}/members`} exact />
        <Route component={AdminPassContainer} path={`/${MENU.ADMIN}/pass`} exact />
        <Route component={AdminOfficialActivityFormContainer} path={[`/${MENU.ADMIN}/official-activities/edit/:activityId`, `/${MENU.ADMIN}/official-activities/new`]} exact />
        <Route component={AdminOfficialActivityDetailContainer} path={`/${MENU.ADMIN}/official-activities/:activityId`} exact />
        <Route component={AdminOfficialActivityContainer} path={`/${MENU.ADMIN}/official-activities`} exact />
        <Route component={AdminProjectFormContainer} path={[`/${MENU.ADMIN}/projects/edit/:projectID`, `/${MENU.ADMIN}/projects/new`]} exact />
        <Route component={AdminProjectContainer} path={`/${MENU.ADMIN}/projects`} exact />
        <Route component={AdminActivityContainer} path={`/${MENU.ADMIN}/activities`} exact />
        {/* <Route component={AdminBookFormContainer} path={[`/${MENU.ADMIN}/books/new`, `/${MENU.ADMIN}/books/edit/:bookID`]} exact /> */}
        <Route component={AdminBookFormNew} path={[`/${MENU.ADMIN}/books/new`, `/${MENU.ADMIN}/books/edit/:bookID`]} exact />
        {/* <Route component={AdminBookContainer} path={`/${MENU.ADMIN}/books`} exact /> */}
        <Route component={AdminBookNew} path={`/${MENU.ADMIN}/books`} exact />
        <Route component={AdminGamification} path={`/${MENU.ADMIN}/gamification`} exact />
        <Route component={AdminInterviewTimeContainer} path={`/${MENU.ADMIN}/interview-time`} exact />
        <Route component={AdminInterviewContainer} path={`/${MENU.ADMIN}/interview`} exact />
        <Route component={AdminHomeContainer} path={`/${MENU.ADMIN}`} exact />
      </Switch>
    </TwoColumnPageShell>
  );
};

export default withRouter(AdminPage);
