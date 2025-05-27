// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'
import starlightImageZoom from 'starlight-image-zoom'
import starlightFullViewMode from 'starlight-fullview-mode'
import starlightViewModes from 'starlight-view-modes'


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
		  starlightImageZoom({showCaptions: false}),
			starlightViewModes(),
		  // starlightFullViewMode({})
		
		],
			

			title: "3D Artist's Handbook",
			// logo: {
      // 	src: './src/assets/3d-artists-handbook/images/icon.png',
      // },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sidney-eliot/3d-artists-handbook' }],
			sidebar: [
				

			obsidianSidebarGroup,

			],
		}),
	],
	// redirects: {
  //   "/": "/3d-artists-handbook",
  // }
});
