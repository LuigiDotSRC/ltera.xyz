export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles")

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "public"
        }
    }
}