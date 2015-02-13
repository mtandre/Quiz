module.exports = function(grunt) {
  grunt.initConfig({
    jst: {
      compile: {
        options: {
        },
        files: {
          "templates.js": ["questions-template.tpl"]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jst');
}
