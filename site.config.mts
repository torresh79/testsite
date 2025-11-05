import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'SR',
	favicon: 'favicon.ico',
	owner: 'Hernan Torres',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://torresh79.github.io/testsite',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/h.e.r.n.a.n.t',
			icon: Instagram,
		} as SocialLink,
	],
};
