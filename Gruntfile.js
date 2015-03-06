module.exports = function(grunt) {
  grunt.initConfig({
    jst: {
      compile: {
        options: {
          //prettify: true
        },
        files: {
          "static/templates.js": ["templates/question.tpl","templates/footer.tpl","templates/results.tpl"]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jst');
}
