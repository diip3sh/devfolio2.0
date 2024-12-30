import { GsapMagnetic } from "../components/animations/gsap-magentic";
import LiveClockUpdate from "../components/live-clock";
import { useThemeStore } from "../store/use-theme-store";
import { SocialsSVG } from "../utlis/constant";

export const HeroComponent = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme: string = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <section className="px-8 bg-primary-light dark:bg-primary-dark relative pt-8">
      <div
        className="2xl:max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1
          className="font-poster-toaster text-[20dvw] 2xl:text-[16dvw] leading-[10dvw] tracking-wider text-secondary-light dark:text-secondary-dark text-center"
          id="heading-svg-text"
        >
          dev
          <span className="font-sans tracking-[-0.075em] font-black">
            F
            <span
              onClick={toggleTheme}
              className="cursor-pointer text-secondary-dark dark:text-secondary-light"
            >
              O
            </span>
            LIO
          </span>
        </h1>
        {/* <div className="h-full w-full bg-secondary-light dark:secondary-dark col-span-2 rounded-xl"></div> */}
      </div>

      <div className="2xl:max-w-7xl mx-auto pb-12 relative">
        <div className="mt-6 space-y-2">
          <div
            className="h-0.5 bg-secondary-light dark:bg-secondary-dark"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></div>
          <div
            className="flex flex-col sm:flex-row gap-3 justify-between items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex gap-3 items-center">
              <h3 className="text-secondary-light dark:text-secondary-dark text-xs font-medium">
                <span className="font-bold">Creative Front-End developer</span>
              </h3>
              <span className="h-auto border-secondary-light dark:border-secondary-dark border"></span>
              <span className="text-secondary-light dark:text-secondary-dark text-xs font-semibold">
                Available for work
              </span>
              <span className="h-auto border-secondary-light dark:border-secondary-dark border"></span>
              <LiveClockUpdate />
            </div>
            <div>
              <ul className="items-center inline-flex gap-3 relative">
                {SocialsSVG.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="hover:text-secondary-light hover:dark:text-secondary-dark/80 text-secondary-light dark:text-secondary-dark"
                    >
                      <GsapMagnetic>{item.svg}</GsapMagnetic>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="h-1.5 bg-secondary-light dark:bg-secondary-dark"
            data-aos="fade-up"
            data-aos-duration="2000"
          ></div>
          <div
            className="h-3 bg-secondary-light dark:bg-secondary-dark"
            data-aos="fade-up"
            data-aos-duration="2500"
          ></div>
          <div
            className="h-6 bg-secondary-light dark:bg-secondary-dark"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="h-12 bg-secondary-light dark:bg-secondary-dark"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="h-24 bg-secondary-light dark:bg-secondary-dark flex items-end p-4"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="150"
          ></div>
        </div>
      </div>
    </section>
  );
};
