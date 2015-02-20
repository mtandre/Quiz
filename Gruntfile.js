module.exports = function(grunt) {
  grunt.initConfig({
    jst: {
      compile: {
        options: {
        },
        files: {
          "static/templates.js": ["static/questions-template.tpl"]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jst');
}
