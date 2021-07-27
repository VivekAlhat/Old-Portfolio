import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import { Switch, Route } from "react-router-dom";
import { VStack, Divider, useMediaQuery } from "@chakra-ui/react";

function App() {
  const [notSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <VStack p={notSmallerScreen ? "5" : "1rem 0.5rem"}>
      <Navbar />
      <Divider p="3px 0" />
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blog" component={Blogs} />
          <Route exact path="*" component={Error} />
        </Switch>
      </>
    </VStack>
  );
}

export default App;
