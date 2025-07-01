const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const pluginTOC = require('eleventy-plugin-toc')

module.exports = function(eleventyConfig) {
    eleventyConfig.setLibrary(
        'md',
        markdownIt().use(markdownItAnchor)
    )
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3'],
        wrapper: 'div',
        flat: false,
        ul: false,
    })
    
    eleventyConfig.addPassthroughCopy("styles")
    eleventyConfig.addPassthroughCopy("img")

    eleventyConfig.addNunjucksFilter("tag_icon_html", function(tag) {
        switch(tag) {
            case "test": return '<span class="emoji">⚙️</span>'
            case "technical": return '<span class="emoji">⌨️</span>'
            case "javascript": return '<i class="devicon-javascript-plain colored"></i>'

            default: return "🏷️"
        }
    })

    eleventyConfig.addNunjucksFilter("slug", function(str) {
        return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }); 

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "public"
        }
    }
}