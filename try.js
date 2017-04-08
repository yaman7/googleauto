exports.config = {
   // your config here ...
   //The address of a running selenium server.
 seleniumAddress: 'http://localhost:4444/wd/hub',
  //Here we specify the name of the specs files.
  specs: ['gugs.js'],
  allScriptsTimeout: 120000,
getPageTimeout: 120000,
  jasmineNodeOpts: {
defaultTimeoutInterval: 2500000,
},
};