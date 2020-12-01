import React from "react";
import Sidebar from "./Sidebar";
import Tasks from "../containers/Tasks";

//-- Stylesheet
import "./content.scss";

const Content = () => {
  return (
    <section className="content">
      <Tasks />
      <Sidebar />
    </section>
  );
};

export default Content;
