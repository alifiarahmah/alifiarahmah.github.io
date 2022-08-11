import About from '../pages/about';
import Blogs from '../pages/blogs';
import Home from '../pages';
import Projects from '../pages/projects';
import React from 'react';

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
