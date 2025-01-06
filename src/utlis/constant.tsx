import { GitIcon } from "../components/git-icon.tsx";
import { LinkedinIcon } from "../components/linkedin-icon.tsx";
import { XIcon } from "../components/x-icon.tsx";
import { AtSignIcon } from "../components/mail-icon.tsx";

export const SOCIALS_ICON_SVG = [
	{
		link: "https://github.com/pilladipesh33",
		svg: <GitIcon />,
	},
	{
		link: "https://www.linkedin.com/in/pilladipesh/",
		svg: <LinkedinIcon />,
	},
	{
		link: "https://twitter.com/dip3sh_",
		svg: <XIcon />,
	},
	{
		link: "mailto:pilladipesh.pd@gmail.com",
		svg: <AtSignIcon />,
	},
];

export const OTHERPROJECTS = [
	{
		url: "https://github.com/pilladipesh33/converter-site",
		title: "Converter",
		description:
			"Converter is a modern web application that transforms videos, images, and audio files between various formats using FFmpeg. With an intuitive drag-and-drop interface, it supports major formats like MP4, MP3, and PNG. The app features real-time conversion progress tracking, format selection, and instant download capabilities.",
	},
	{
		// url: "",
		title: "Car Deals",
		description:
			"It is a comprehensive car marketplace connecting buyers, sellers, and dealers through real-time transactions. The platform offers subscription-based dealer dashboards for inventory management, while individual users can list or browse vehicles freely. Features include live updates, secure payments, and detailed vehicle analytics for informed decision-making.",
	},
	{
		url: "https://github.com/pilladipesh33/Note.it",
		title: "Note.it",
		description:
			"Your all-in-one digital workspace for seamless organization and real-time collaboration. Create customizable pages, manage powerful databases, and bring ideas to life across all devices. Transform your workflow with intuitive tools designed for modern productivity.",
	},
	{
		// url: "",
		title: "Konstrukt",
		description:
			"It is a comprehensive B2B2B SaaS platform that empowers agencies and businesses with advanced website and funnel building capabilities. Features include unlimited hosting, custom dashboards, project management, and Stripe integration for seamless payments. Built for scalability with role-based access, analytics, and complete media management tools.",
	},
	// Add more projects as needed...
];

export const FEATURES = [
	{
		url: "https://github.com/magicuidesign/magicui/issues/129",
		title: "MagicUI",
	},
	{
		url: "https://github.com/tamagui/tamagui",
		title: "Tamagui",
	},
	{
		url: "https://github.com/Bashamega/ebookCraft",
		title: "ebookCraft",
	},
	{
		url: "https://github.com/ibelick/motion-primitives",
		title: "Motion Primative",
	},
];

export const WORK_EXPERIENCE = [
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

export const PROJECT_TITLE = [
	"primary projects",
	"highlighted projects",
	"a selection of my work",
	"notable projects I've completed",
];

export const WORK_EXPERIENCE_TITLE = [
	"Professional Journey",
	"Career Highlights",
	"My Work Experience",
	"Noteworthy Roles I've Held",
];

export const CONTRIBUTION_TITLE = [
	"Open Source Contributions",
	"Community Contributions",
	"Collaborative Projects",
	"Contributions to Open Source",
];
