const otherprojects = [
  {
    url: "https://note-it-omega.vercel.app",
    title: "Note.it",
    description:
      "Your all-in-one digital workspace. Seamlessly organize, collaborate, and bring ideas to life. Customizable pages, powerful databases, and real-time collaboration make productivity effortless. Transform your workflow across devices with Note.it",
  },
  {
    url: "https://www.windstatic.com/",
    title: "Windstatic",
    description:
      "A set of 161 elements & layouts made with Tailwind CSS and Alpine.js. Skillfully designed with an eye for aesthetics, offering an excellent starting point for your upcoming project.",
  },
  {
    url: "https://www.colorsandfonts.com/",
    title: "Colors & Fonts",
    description:
      "Color and typography resources and inspiration for Web Developers and Digital Designers.",
  },
  {
    url: "https://www.svgdoodles.com/",
    title: "SVG Doodles",
    description:
      "A free collection of 208 super duper SVG doodles for your creative projects.",
  },
  // Add more projects as needed...
];

export const ProjectComponent = () => {
  function calculateAosDuration(index: number) {
    return 1500 + index * 500; // Example: Increment duration by 500ms for each project
  }
  return (
    <section className="bg-primary-light dark:bg-primary-dark">
      <div className="px-8 2xl:max-w-7xl mx-auto py-32">
        <div className="space-y-2">
          {/* <!-- Section Title and Decorative Elements --> */}
          <div
            className="h-0.5 bg-secondary-light dark:bg-secondary-dark"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></div>
          <h3
            className="text-secondary-light dark:text-secondary-dark text-base font-medium"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span>main</span> <span className="font-bold">projects</span>
          </h3>
        </div>

        <ul
          className="mx-auto grid grid-cols-1 sm:grid-cols-2 text-secondary-light dark:text-secondary-dark md:grid-cols-3 lg:grid-cols-4 items-start gap-6 mt-32"
          role="list"
        >
          {otherprojects.map((project, index) => (
            <li
              className="flow-root h-full"
              data-aos="fade-up"
              data-aos-duration={calculateAosDuration(index)}
            >
              <a href={project.url}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <p className="group-hover:text-secondary-light/70 group-hover:dark:text-secondary-dark/70 text-secondary-light dark:text-secondary-dark text-9xl font-black lg:rotate-90 xl:-translate-x-28 lg:-translate-x-16 lg:mb-8 xl:mb-0">
                      0{index + 1}.
                    </p>
                    <p className="italic shrink-0">{project.title}</p>
                    <p className="text-base mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <p className="mt-3 text-base font-semibold">
                      Learn more &nbsp; ↗
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
