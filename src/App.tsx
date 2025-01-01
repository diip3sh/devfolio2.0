import { useEffect } from "react";
import { HeroComponent } from "./pages/hero";
import { IntroComponent } from "./pages/intro";
import { ProjectComponent } from "./pages/project";
import { WorkExperienceCompoent } from "./pages/experience";
import { FeatureComponent } from "./pages/features";
import { useThemeStore } from "./store/use-theme-store";
import AOS from "aos";
import "aos/dist/aos.css";
import { ModeButton } from "./components/mode-button";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={theme}>
      <Content />
      <ModeButton />
    </div>
  );
}

export default App;

const Content = () => {
  return (
    <div>
      <HeroComponent />
      <IntroComponent />
      <ProjectComponent />
      <WorkExperienceCompoent />
      <FeatureComponent />
    </div>
  );
};
