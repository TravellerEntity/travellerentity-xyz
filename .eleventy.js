const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
module.exports = function(eleventyConfig) {
  //Always include src/ before file paths!
  eleventyConfig.addPassthroughCopy("src/assets/**");
  eleventyConfig.addPassthroughCopy("src/demos/**");
  eleventyConfig.addPassthroughCopy("src/fonts/**");
  eleventyConfig.addPassthroughCopy("src/javascripts/**");
  eleventyConfig.addPassthroughCopy("src/*.html");
  eleventyConfig.addPassthroughCopy("src/*.css");
  eleventyConfig.addPassthroughCopy("src/*.js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.setQuietMode("true");
  eleventyConfig.addPlugin(directoryOutputPlugin);
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "site"
    }
  };
};
  