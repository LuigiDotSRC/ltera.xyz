export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles")

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}