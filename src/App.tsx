// import { useEffect } from "react";
import { HeroComponent } from "./pages/hero";
import { IntroComponent } from "./pages/intro";
import { ProjectComponent } from "./pages/project";
import { WorkExperienceCompoent } from "./pages/experience";
import { FeatureComponent } from "./pages/features";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { ThemeProvider } from "./components/theme-provider.tsx";

function App() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HeroComponent />
        <IntroComponent />
        <ProjectComponent />
        <WorkExperienceCompoent />
        <FeatureComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
