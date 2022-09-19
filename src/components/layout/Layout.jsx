import PageContainer from "components/PageContainer";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <PageContainer>
      <MainNavigation />
      <main>{props.children}</main>
    </PageContainer>
  );
};

export default Layout;
