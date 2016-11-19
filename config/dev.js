module.exports.tasks = {
  // watch for changes during development
  watch: {
    js: {
      files: ['Gruntfile.js', 'config/*.js', '<%= paths.src %>/js/**/*.js'],
      tasks: ['jshint'],
      options: {
        livereload: true
      }
    },
    css: {
      files: [
        '<%= paths.src %>/css/**/*.scss'
      ],
      tasks: ['sass', 'postcss'],
      options: {
        livereload: true
      }
    }
  },

  // debug while developing
  jshint: {
    all: ['Gruntfile.js', 'config/*.js', '<%= paths.src %>/js/**/*.js']
  },

  copy: {
    dev: {
      files: [
        { src: 'bower_components/material-design-lite/material.min.css', dest: '<%= paths.src %>/pages/css/material.min.css' },
        { src: 'bower_components/material-design-lite/material.min.js', dest: '<%= paths.src %>/pages/js/material.min.js' },
        { src: '<%= paths.src %>/css/helpers.css', dest: '<%= paths.src %>/pages/css/helpers.css' },
        { expand: true, src: '**', cwd: 'bower_components/material-design-lite/src/images', dest: 'src/img/mdl/' }
      ]
    }
  },

  serve: {
    options: {
      port: 9000
    }
  }


};
