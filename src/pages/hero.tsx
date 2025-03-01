import { useState } from "react";
import LiveClockUpdate from "../components/live-clock";
import { useTheme } from "../context/ThemeContext";
import { SOCIALS_ICON_SVG, themes } from "../utlis/constant";

export const HeroComponent = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const getNextTheme = () => {
    let nextTheme;
    do {
      nextTheme = themes[Math.floor(Math.random() * themes.length)];
    } while (nextTheme === currentTheme);
    return nextTheme;
  };

  const handleThemeChange = () => {
    const newTheme = getNextTheme();
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  const getGradient = (theme: string) => {
    switch (theme) {
      case "black":
        return "bg-gradient-to-r from-gray-900 to-gray-600";
      case "purple-pink":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "pink-purple":
        return "bg-gradient-to-r from-pink-500 to-purple-500";
      case "cobalt-white":
        return "bg-gradient-to-r from-blue-600 to-white";
      case "green-blue":
        return "bg-gradient-to-r from-green-400 to-blue-500";
      case "apricot-orange":
        return "bg-gradient-to-r from-yellow-200 to-orange-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <section className={`px-8 bg-primary relative pt-8 theme-${theme}`}>
      <div
        className="2xl:max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1
          className="font-poster-toaster text-[20dvw] 2xl:text-[16dvw] leading-[10dvw] tracking-[-0.055em] text-secondary text-center"
          id="heading-svg-text"
        >
          Hello WoRld!
        </h1>

        <div className="h-full w-full bg-secondary col-span-2 rounded-xl"></div>
      </div>

      <div className="2xl:max-w-7xl mx-auto pb-12 relative">
        <div className="mt-6 space-y-2">
          <div
            className="h-0.5 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></div>
          <div
            className="flex flex-col sm:flex-row gap-3 justify-between items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex gap-3 items-center">
              <h3 className="text-secondary text-xs font-medium">
                <span className="font-bold">Creative Front-End Developer</span>
              </h3>
              <span className="h-auto border-secondary border"></span>
              <span className="text-secondary text-xs font-semibold">
                Available for work
              </span>
              <span className="h-auto border-secondary border"></span>
              <LiveClockUpdate />
            </div>
            <div>
              <ul className="items-center inline-flex gap-3 relative">
                {SOCIALS_ICON_SVG.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="hover:text-secondary text-secondary"
                    >
                      {item.svg}
                    </a>
                  </li>
                ))}
                <li>
                  <div
                    className={`cursor-pointer outline-dotted outline-2 outline-primary h-5 w-5 rounded-full ${getGradient(currentTheme)}`}
                    onClick={() => handleThemeChange()}
                  ></div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="h-1.5 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="2000"
          ></div>
          <div
            className="h-3 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="2500"
          ></div>
          <div
            className="h-6 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="h-12 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="h-24 bg-secondary flex items-end p-4"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="150"
          ></div>
        </div>
      </div>
    </section>
  );
};
