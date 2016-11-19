
var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];


module.exports.tasks = {
  sass: {
    options: {
      style: 'expanded'
    },
    dev: {
      files: {
        '<%= paths.src %>/css/material-lite-demo.css': '<%= paths.src %>/css/sass/material-lite-demo.scss'
      }
    }
  },

  // remove all bs from css
  cssmin: {
    options: {
      keepSpecialComments: 0
    }
  },

  // version bumper
  bump: {
    options: {
      files: ['package.json', 'bower.json']
    }
  },

  // application constants
  ngconstant: {
    options: {
      dest: '<%= paths.src %>/js/app.constants.js',
      name: 'app.constants',
    }
  },

  postcss: {
    options: {
      map: true,
      processors: [
        require('autoprefixer')({browsers: AUTOPREFIXER_BROWSERS})
      ]
    },
    shared: {
      src: ['src/css/material-lite-blank.css', 'src/css/material-lite-demo.css']
    }
  },

};
