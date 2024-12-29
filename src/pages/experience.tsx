const workExperience = [
  {
    name: "BridgeLabz Solution",
    role: "React Native Intern",
    opinion:
      "As an intern, I delved into native mobile app development, mastering React Native, CSS, and Redux. My inaugural project—a note-taking app—provided hands-on experience in app architecture and functionality. This foundational project honed my skills in mobile development technologies and best practices.",
  },
  {
    name: "Emids Technologies",
    role: "Software Engineer",
    opinion:
      "As a React Native developer, I led a team of 5-7 developers in creating a Malnutrition Awareness App. This real-world project challenged my skills, as I initiated tasks and ensured a user-friendly, real-time application. The app aimed to educate people about malnutrition effectively.",
  },
  {
    name: "Meon Technologies",
    role: "React Native Developer",
    opinion:
      "As a seasoned React Native developer, I simultaneously managed 3-4 projects, taking charge of product development. My focus was on creating mobile apps for the finance and wealth sector, demonstrating versatility and leadership in high-stakes environments.",
  },
];

export const WorkExperienceCompoent = () => {
  return (
    <section className="bg-primary-light dark:bg-primary-dark">
      <div className="px-8 2xl:max-w-7xl mx-auto py-6">
        <div className="mt-6 space-y-2">
          <div className="h-0.5 bg-secondary-light dark:bg-secondary-dark"></div>
          <h3 className="text-secondary-light dark:text-secondary-dark text-base font-medium">
            <span>work</span> <span className="font-bold">Experience</span>
          </h3>
          <div className="h-1.5 bg-secondary-light dark:bg-secondary-dark"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 text-secondary-light dark:text-secondary-dark gap-6 pt-2 mt-2">
          {workExperience.map((opinion) => (
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
