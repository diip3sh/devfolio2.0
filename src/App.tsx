import { useEffect } from "react";
import { WorkExperienceCompoent } from "./components/experience";
import { FeatureComponent } from "./components/features";
import { HeroComponent } from "./components/hero";
import { IntroComponent } from "./components/intro";
import { ProjectComponent } from "./components/project";
// import AOS from "aos";
// import "aos/dist/aos.css";

function App() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <>
      <HeroComponent />
      <IntroComponent />
      <ProjectComponent />
      <WorkExperienceCompoent />
      <FeatureComponent />
    </>
  );
}

export default App;
