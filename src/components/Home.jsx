import Header from "./Header";
import Project from "./Project";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Footer from "./Footer";
import { Divider } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Header />
      <Divider p="3px 0" />
      <Project />
      <Divider p="3px 0" />
      <Blog />
      <Divider p="3px 0" />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
