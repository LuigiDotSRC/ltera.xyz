export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles")

    eleventyConfig.addNunjucksFilter("tag_icon_html", function(tag) {
        switch(tag) {
            case "test": return '<span class="emoji">⚙️</span>'
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