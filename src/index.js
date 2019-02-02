var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('src/jasmine.json');

jasmine.onComplete(function(passed){
   if(passed){
       console.log('Tests Success');
   }
    else {
       console.error("Tests Failed");
   }
});

jasmine.execute();