module.exports = function (grunt) {

  'use stric';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    "6to5": {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "server.js": "src/Server6.js"
        }
      }
    },

    watch: {
      scripts: {
        files: 'src/**/*.js',
        tasks: ['6to5']
      }
    }

  });

  require("load-grunt-tasks")(grunt);
  grunt.registerTask("default", ["watch"]);

};
