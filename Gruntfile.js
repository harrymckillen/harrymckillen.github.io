module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      irelandfont: {
        files: [
          {expand: true, cwd: '../ireland-font/build/', src: ['**'], dest: 'ireland-font/'},
        ]
      },
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
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('update',
    [
      'clean:irelandfont',
      'copy:irelandfont'
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