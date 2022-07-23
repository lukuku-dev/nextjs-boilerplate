import Layout from "components/common/Layout";
import Greeting from "components/home/Greeting";

const IndexPage = () => (
  <Layout
    title="Lukuku Next(TS) Starter Boilerplate"
    description="A frontend NextJS starter boilerplate made with ❤️ bu Lukuku."
  >
    <Greeting message={"Welcome to Lukuku Next Boilerplate"} />
  </Layout>
);

export default IndexPage;
