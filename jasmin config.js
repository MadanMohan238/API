var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
   // ...
   onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   }
}












//JASMINE_CONFIG_PATH=spec/config/jasmine.json jasmine

//jasmine --config=spec/config/jasmine.json