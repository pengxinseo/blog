import { RiGitRepositoryFill, RiQuillPenFill, RiUser3Fill } from 'react-icons/ri';

export const navLinks = [
	{
		title: 'blog',
		href: '/blog',
		icon: <RiQuillPenFill />,
	},
	{
		title: 'projects',
		href: '/projects',
		icon: <RiGitRepositoryFill />,
	},
	{
		title: 'about',
		href: '/about',
		icon: <RiUser3Fill />,
	},
];
