// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'
import starlightImageZoom from 'starlight-image-zoom'


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
        // Generate the Obsidian vault pages.
        starlightObsidian({

					vault: '../obsidian',
					ignore: [ // ignored files and folders will not be viewable, even with a direct URL
						'.obsidian/**',
						'work-in-progress/**',
					],
					copyFrontmatter: 'starlight',
					sidebar: {
						collapsed: false,
						collapsedFolders: true,
					}
					


        }),
		  starlightImageZoom({showCaptions: false})],

			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				

			obsidianSidebarGroup,

			],
		}),
	],
});
