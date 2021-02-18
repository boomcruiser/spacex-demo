import SpaceProgramsProvider from "../providers/space-program-provider";

import { BASE_SPACEX_URL } from "../constants";

import LoadingProvider from "../providers/loading-provider";
import Loader from "../components/loader";
import LayoutWrapper from "../layout";

const Home = ({ data }) => {
  return (
    <SpaceProgramsProvider>
      <LoadingProvider>
        <Loader />
        <LayoutWrapper data={data} />
      </LoadingProvider>
    </SpaceProgramsProvider>
  );
};

export async function getServerSideProps() {
  const response = await fetch(BASE_SPACEX_URL);
  const data = await response.json();
  return {
    props: { data },
  };
}

export default Home;
