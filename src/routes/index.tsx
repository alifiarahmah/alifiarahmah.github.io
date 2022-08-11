import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

export const routes = [
	{
		path: '/',
		label: 'Home',
		component: <Home />
	},
	{
		path: '/about',
		label: 'About',
		component: <About />
	},
	{
		path: '/projects',
		label: 'Projects',
		component: <Projects />
	},
	{
		path: '/blogs',
		label: 'Blogs',
		component: <Blogs />
	}
];
