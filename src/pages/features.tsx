import { TypewriteAnimation } from "../components/animation/typewriter";
import { CONTRIBUTION_TITLE, FEATURES } from "../utlis/constant";

export const FeatureComponent = () => {
  return (
    <section className="pb-10 bg-primary overflow-hidden">
      <div className="px-8 2xl:max-w-7xl mx-auto py-6">
        <div className="mt-32 space-y-2">
          <div
            className="h-0.5 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></div>
          <h3
            className="text-secondary text-xs font-medium"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <TypewriteAnimation examples={CONTRIBUTION_TITLE} />
          </h3>
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
            className="h-24 bg-secondary"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="150"
          ></div>
        </div>

        <ul className="mx-auto flex text-left gap-3 items-start text-secondary mt-3">
          {FEATURES.map((template) => (
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
