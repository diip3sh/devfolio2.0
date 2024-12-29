const features = [
  {
    url: "https://github.com/magicuidesign/magicui/issues/129",
    title: "MagicUI",
  },
  {
    url: "",
    title: "Tamagui",
  },
  {
    url: "https://github.com/Bashamega/ebookCraft",
    title: "ebookCraft",
  },
  // Add more features as needed...
];

export const FeatureComponent = () => {
  return (
    <section className="bg-primary-light dark:bg-primary-dark">
      <div className="px-8 2xl:max-w-7xl mx-auto py-6">
        <div className="mt-32 space-y-2">
          <div
            className="h-0.5 bg-secondary-light dark:bg-secondary-dark"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></div>
          <h3
            className="text-secondary-light dark:text-secondary-dark text-xs font-medium"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span>popular</span> <span className="font-bold">Featured</span>{" "}
            <span className="italic">work</span>
          </h3>
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
            className="h-24 bg-secondary-light dark:bg-secondary-dark"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="150"
          ></div>
        </div>

        <ul className="mx-auto flex text-left gap-3 items-start text-secondary-light dark:text-secondary-dark mt-3">
          {features.map((template) => (
            <>
              <li className="flow-root col-span-full h-full ">
                <a href={template.url}>
                  <div>
                    <p className="italic shrink-0 text-xs ">{template.title}</p>
                  </div>
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};
