import Head from "next/head";
import { SpaceProgramsContext } from "../providers/space-program-provider";
import { useContext } from "react";
import { CardContainer } from "../components/card/container";
import Sidebar from "../components/sidebar";
const Layout = ({ body, sidebar }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="This is a sample ui page for the spacex api. This will enlist all the spacex programs."
        ></meta>
        <title>Spacex Launch Programs</title>
      </Head>

      <header>
        <h1>SpacEx Launch Programs</h1>
      </header>
      <aside>{sidebar}</aside>
      <main>{body}</main>
      <footer>Created By: Abhineet Kaushal</footer>
    </>
  );
};
const LayoutWrapper = ({ data }) => {
  const [spacePrograms, setSpacePrograms] = useContext(SpaceProgramsContext);
  return (
    <>
      {
        <Layout
          body={<CardContainer items={spacePrograms || data} />}
          sidebar={<Sidebar />}
        />
      }
    </>
  );
};
export default LayoutWrapper;
