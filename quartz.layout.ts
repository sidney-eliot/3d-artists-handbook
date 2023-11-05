import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Handbook's GitHub": "https://github.com/Epicrex/3d-artists-handbook",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    // Component.TagList(),
    // Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        title: "Explorer",
        folderClickBehavior: "collapse",
        folderDefaultState: "collapsed",
        useSavedState: true,
        filterFn: (node) => {
          // set containing names of everything you want to filter out
          const omit = new Set(["work_in_progress", "hotkeys", "art-courses.md"])
          return !omit.has(node.name.toLowerCase())
        },
        mapFn: (node) => {
          const nameLinkMap: Record<string, string> = {
            yyyyyyyyy: "zzzzzzzzz",
          }
          if (node.depth > 0) {
            for (const nameLink in nameLinkMap) {
              if (!node.file && node.name === nameLink) {
                node.displayName = nameLinkMap[nameLink]
              }
            }
          }
        },

        sortFn: (a, b) => {
          const nameOrderMap: Record<string, number> = {
            hotkeys: 199,
            theory: 200,
            "theory/glossary": 201,
            "theory/composition": 202,
            "theory/technical-side-of-character-design": 203,
            "theory/artistic-side-of-character-design": 204,
            "theory/topology-and-retopology": 205,
            "theory/optimization": 206,
            "theory/color": 207,
            "theory/texture-maps": 208,
            "theory/image-extensions": 209,
            "theory/art-software": 210,
            process: 500,
            "process/organic-sculpting-and-hard-surface-sculpting-and-modeling": 501,
            "process/workflow-between-zbrush-and-blender": 502,
            "process/sculpting-in-blender": 503,
            "process/hair": 504,
            "process/anime-styled-characters": 505,
            texture: 600,
            "texture/uv-unwrapping": 601,
            "texture/baking-and-texturing-prep": 602,
            "texture/baking": 603,
            "texture/texturing": 604,
            presentation: 700,
            "presentation/rigging": 701,
            "presentation/posing-and-animating": 702,
            "presentation/lighting": 703,
            "presentation/blender-to-unreal-pipeline": 704,
            "rendering-compositing-sharing": 800,
            "software-knowledge": 900,
            "software-knowledge/zbrush-specific": 901,
            "software-knowledge/blender-specific": 902,
            "software-knowledge/blender-addons": 903,
            "software-knowledge/blender-addons-guide": 904,
            extra: 1000,
            "extra/asset-sites": 1001,
            "extra/2d-art-resources": 1002,
            "extra/model-part-names": 1003,
            "my-setup": 1100,
          }

          // console.log(a.name)
          // console.log(a.displayName)
          // console.log(b.name)
          // console.log(b.displayName)

          let orderA = 0
          let orderB = 0

          if (a.file && a.file.slug) {
            console.log(a.file.slug)
            orderA = nameOrderMap[a.file.slug] || 0
          } else if (a.name) {
            orderA = nameOrderMap[a.name] || 0
          }
          if (b.file && b.file.slug) {
            orderB = nameOrderMap[b.file.slug] || 0
            console.log(b.file.slug)
          } else if (b.name) {
            orderB = nameOrderMap[b.name] || 0
          }

          return orderA - orderB
        },
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
