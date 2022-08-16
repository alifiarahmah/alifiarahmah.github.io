import React from 'react';
import Home from '../pages';
import About from '../pages/about';
import Blogs from '../pages/blog';
import Projects from '../pages/projects';

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
		path: '/blog',
		label: 'Blogs',
		component: <Blogs />
	}
];
