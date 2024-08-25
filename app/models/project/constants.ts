import { Project } from './types';

export const PROJECTS: Project[] = [
	{
		title: 'ERP PT. Gasing Sulawesi',
		status: 'Ongoing',
		scope: 'Backend',
		stacks: ['Laravel', 'MySQL', 'REST API', 'JSON'],
		desc: 'Developed a RESTful API backend web service using Laravel and MySQL database for doing data related operation that needs to be done in frontend web application in this project.'
	},
	{
		title: 'Kementerian BUMN Dashboard',
		status: 'Finished',
		scope: 'Fullstack',
		stacks: ['Vue.js', 'Vuex', 'Laravel', 'Inertia.js', 'Tailwind CSS', 'PostgreSQL'],
		desc: 'Developed a monolith dashboard web application using Laravel + Vue.js + Inertia.js. Besides doing operation by writing and reading data from PostgreSQL database directly in monolith way, the web app is also developed to consume supported data from other backend web service in this project.'
	},
	{
		title: 'Senpai',
		status: 'Finished',
		scope: 'Frontend - Static Pages',
		stacks: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
		desc: 'Translated app mockups into ~40 HTML static pages with styles using CSS & Bootstrap and DOM manipulation using JavaScript & jQuery.'
	},
	{
		title: 'Fabulash',
		status: 'Finished',
		scope: 'Frontend - Static Pages',
		stacks: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
		desc: 'Translated app mockups into ~100 HTML static pages with styles using CSS & Bootstrap and DOM manipulation using JavaScript & jQuery.'
	},
	{
		title: 'Pertamina HSSE',
		status: 'Finished',
		scope: 'Frontend - Static Pages',
		stacks: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
		desc: 'Translated app mockups into ~50 HTML static pages with styles using CSS & Bootstrap and DOM manipulation using JavaScript & jQuery.'
	},
	{
		title: 'Ibnu Sina Komkordik',
		status: 'Finished',
		scope: 'Frontend - Static Pages',
		stacks: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
		desc: 'Translated app mockups into ~20 HTML static pages with styles using CSS & Bootstrap and DOM manipulation using JavaScript & jQuery.'
	}
];
