import { useEffect } from "react";
import { HeroComponent } from "./pages/hero";
import { IntroComponent } from "./pages/intro";
import { ProjectComponent } from "./pages/project";
import { WorkExperienceCompoent, WorkExperienceComponent } from "./pages/experience";
import { FeatureComponent } from "./pages/features";
import { useThemeStore } from "./store/use-theme-store";
import AOS from "aos";
import "aos/dist/aos.css";
import { ModeButton } from "./components/mode-button";
import { ThemeProvider, useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider>
      <div className={theme}>
        <Content />
        <ModeButton />
      </div>
    </ThemeProvider>
  );
}

export default App;

const Content = () => {
  const { theme } = useTheme();
  return (
    <div className={`theme-${theme}`}>
      <HeroComponent />
      <IntroComponent />
      <ProjectComponent />
      <WorkExperienceComponent />
      <FeatureComponent />
    </div>
  );
};
