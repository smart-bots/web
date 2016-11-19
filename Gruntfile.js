module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  var options = {
    paths: {
      src: 'src'
    },
    pkg: pkg
  };

  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  grunt.registerTask('default', ['copy:dev', 'sass', 'postcss', 'jshint', 'watch']);

  grunt.registerTask('shared', [
    'copy:dev',
    'clean:demo',
    'copy:demo',
    'sass',
    'postcss',
    'ngconstant',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'filerev',
    'usemin',
  ]);

  grunt.registerTask('demo', [
    'shared',
    'copy:postusemin',
    'grep:demo',
  ]);

  grunt.registerTask('release', [
    'shared',
    'copy:postusemin',
    'grep:release',
    'compress',
    'copy:postusemin',
    'grep:demo',
  ]);

};
