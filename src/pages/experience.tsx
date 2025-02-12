import { TypewriteAnimation } from "../components/animation/typewriter";
import { WORK_EXPERIENCE, WORK_EXPERIENCE_TITLE } from "../utlis/constant";

export const WorkExperienceComponent = () => {
  return (
    <section className="bg-primary">
      <div className="px-8 2xl:max-w-7xl mx-auto py-6">
        <div className="mt-6 space-y-2">
          <div className="h-0.5 bg-secondary"></div>
          <h3 className="text-secondary text-base font-medium">
          <TypewriteAnimation examples={WORK_EXPERIENCE_TITLE} />
          </h3>
          <div className="h-1.5 bg-secondary"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 text-secondary gap-6 pt-2 mt-2">
          {WORK_EXPERIENCE.map((opinion) => (
            <div>
              <p className="italic text-2xl block font-bold">
                {opinion.name} {opinion.role}
              </p>
              <p className="text-sm leading-relaxed mt-6">{opinion.opinion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
