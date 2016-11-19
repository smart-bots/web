module.exports.tasks = {
  // application constants
  ngconstant: {
    demo: {
      constants: {
        APP: {
          version: '<%= pkg.version %>'
        }
      }
    }
  },

  // clean generated files
  clean: {
    demo: [
      'demo'
    ]
  },

  copy: {
    demo: {
      files: [
        { src: 'src/index.html', dest: '.tmp/html/index.html' },
        { expand: true, cwd: 'src', src: ['**/*.html', '!index.html', '!blank.html', '!tpl/blank/**'], dest: 'demo/' },
        { expand: true, cwd: 'src', src: ['img/**'], dest: 'demo/' },
        { expand: true, cwd: 'src', src: ['pages/**'], dest: 'demo/' },
        { expand: true, cwd: 'src', src: ['js/demo/apis/*.json'], dest: 'demo/' },
        { expand: true, src: '**', cwd: 'bower_components/font-awesome/fonts', dest: 'demo/fonts/' },
      ]
    },
    postusemin: {
      files: [
        { src: '.tmp/html/index.html', dest: 'demo/index.html' }
      ]
    }
  },

  grep: {
    demo: {
      files: {
        'demo/index.html': ['demo/index.html']
      },
      options: {
        pattern: 'demo',
        fileOverride: true
      }
    }
  },

  // set usemin working file
  useminPrepare: {
    html: '.tmp/html/index.html',
    options: {
      root: 'src',
      dest: 'demo'
    }
  },

  // replace tags
  usemin: {
    html: ['.tmp/html/index.html'],
    options: {
      assetsDirs: ['demo']
    }
  },

  // add rev to bust cache
  filerev: {
    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 20
    },
    demo: {
      src: [
        'demo/js/**/*.js',
        'demo/css/**/*.css',
      ]
    }
  },
};
