module.exports.tasks = {
  // Remove analytics tag from demo for release
  grep: {
    release: {
      files: {
        'demo/index.html': ['demo/index.html']
      },
      options: {
        pattern: 'release',
        fileOverride: true
      }
    }
  },

  // make a distribution of our application / theme
  compress: {
    main: {
      options: {
        archive: 'releases/<%= pkg.name %>.<%= pkg.version %>.zip'
      },
      files: [
        {
          expand: true, src: [
            'config/**',
            'demo/**',
            'src/**',
            '.gitattributes', '.gitignore', 'bower.json', 'Gruntfile.js', 'package.json', 'README.md', 'CHANGELOG.md',
          ],
          dest: '.'
        }
      ]
    }
  },
};
