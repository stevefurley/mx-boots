
module.exports = function(grunt) {


  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'assets/css/style.css': 'assets/scss/style.scss',       // 'destination': 'source'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
      },
      options: {
        livereload: true
      },
      build: {
        files: ['**/*'],
        tasks: ['sass']
      },

    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass','watch']);
};
