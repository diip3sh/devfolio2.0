import LiveClockUpdate from "../components/live-clock";
import { useTheme } from "../context/ThemeContext";
import { SOCIALS_ICON_SVG, themes } from "../utlis/constant";

export const HeroComponent = () => {
  const { theme, setTheme } = useTheme();

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
          dev
          <span className="tracking-[-0.055em] font-black font-sans">
            F<span>O</span>
            LIO
          </span>
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
                <span className="font-bold">Creative Front-End developer</span>
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
                <li>
                  {themes.map((color) => (
                    <div className="cursor-pointer" key={color} onClick={() => setTheme(color)}>
                      {color}
                    </div>
                  ))}
                </li>
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
