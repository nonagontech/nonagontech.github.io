import "D:/project/vue/nonagontech.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "D:/project/vue/nonagontech.github.io/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "D:/project/vue/nonagontech.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "D:/project/vue/nonagontech.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "D:/project/vue/nonagontech.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "D:/project/vue/nonagontech.github.io/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
