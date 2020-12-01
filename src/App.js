import React from "react";
import { Content, Header, Footer } from "./components";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="app">
          <Header />
          <Content />
          <Footer />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
