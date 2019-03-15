const stdin = process.openStdin();
const universeService = require('./services/universService');
const _universeService = new universeService();

const AppService = require('./services/appService');
const _appService = new AppService();


let isUniverseGenerated = _universeService.generateUniverse();

if (isUniverseGenerated) {
    stdin.addListener("data", function (d) {
       let response = _appService.handleInput(d.toString().toLowerCase().trim());
       console.log(response);
    });

    console.log("Ready to receive the inputs");
}
else {
    console.log("Universe is not generated, you can't go ahead");
}