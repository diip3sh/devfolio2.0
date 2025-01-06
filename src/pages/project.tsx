import { LinkIcon } from "../components/link-icon";
import { OTHERPROJECTS, PROJECT_TITLE } from "../utlis/constant";
import { TypewriteAnimation } from "../components/animation/typewriter.tsx";

export const ProjectComponent = () => {
	function calculateAosDuration(index: number) {
		return 1500 + index * 500; // Example: Increment duration by 500ms for each project
	}
	return (
		<section className="bg-primary-light dark:bg-primary-dark">
			<div className="px-8 2xl:max-w-7xl mx-auto py-32">
				<div className="space-y-2">
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
						<TypewriteAnimation examples={PROJECT_TITLE} />
					</h3>
					<div className="h-1.5 bg-secondary-light dark:bg-secondary-dark"></div>
				</div>

				<ul
					className="grid grid-cols-1 sm:grid-cols-2 text-secondary-light dark:text-secondary-dark md:grid-cols-3 lg:grid-cols-4 items-start gap-6 mt-32"
					role="list"
				>
					{OTHERPROJECTS.map((project, index) => (
						<li
							className="flow-root h-full"
							data-aos="fade-up"
							data-aos-duration={calculateAosDuration(index)}
						>
							<a href={project.url}>
								<div className="h-full flex flex-col justify-between">
									<div>
										<p className="group-hover:text-secondary-light/70 xl:ml-10 group-hover:dark:text-secondary-dark/70 text-secondary-light dark:text-secondary-dark text-9xl font-black lg:rotate-90 xl:-translate-x-28 lg:-translate-x-16 lg:mb-8 xl:mb-0">
											0{index + 1}.
										</p>
										<p className="italic shrink-0 mt-10">{project.title}</p>
										<p className="text-base mt-3 leading-relaxed">
											{project.description}
										</p>
									</div>
									<div>
										<p className="mt-3 text-base font-semibold flex items-center">
											<span>Learn more</span>
											<LinkIcon />
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
