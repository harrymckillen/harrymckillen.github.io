module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      irelandfont: {
        files: [
          {expand: true, cwd: '../ireland-font/build/', src: ['**'], dest: 'ireland-font/'},
        ]
      },
      dosui: {
        files: [
          {expand: true, cwd: '../dos-ui/build/', src: ['**'], dest: 'dos-ui/'},
        ]
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true,
          hostname: 'localhost',
          port: 4000,
          base: '/',
          open: true
        }
      }
    },
    clean: {
      irelandfont: {
        src: ['ireland-font/']
      },
      dosui: {
        src: ['dos-ui/']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('update',
    [
      'clean',
      'copy', 
    ]);
  grunt.registerTask('default',
    [
      'update'
    ]);
  grunt.registerTask('serve',
    [
      'update',
      'connect'
    ]);
};