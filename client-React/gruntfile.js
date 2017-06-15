var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      scripts: {
        files: ['./public/*/component/*.js', './public/*/style/*.scss', './public/store/*'],
        tasks: ['webpack'],
        options: {
          interrupt: true,
          livereload: true
        },

      },
    },
    webpack: {
      scripts: {
        // webpack options
        entry: "./main.js",
        output: {
            path: path.join(__dirname, '/'),
            filename: "app.bundle.js",
        },
        /*watch: true, if this is turned on, then we dont need watch task*/
        stats: {
            // Configure the console output
            colors: true,
            modules: true,
            reasons: true
        },
        module: {
          loaders: [
              { 
                  test: /\.scss$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
              },
              {
                  test: /\.jsx?$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: "babel-loader",
                  query: {
                      presets: ["es2015", "react"]
                  }

              }
          ]
        },
        plugins: [
            new ExtractTextPlugin("app.bundle.css")
        ]
      }
    }
  });

  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['webpack', 'watch']);

};