(function(){

  //code inside here will only run once the entire page is loaded
  window.onload = function(){


    var teamone_shootButton = document.querySelector("#teamone-shoot");
    var teamone_numshots = document.querySelector("#teamone-numshots");
    var teamone_numhits = document.querySelector("#teamone-numhits");

    var teamtwo_shootButton = document.querySelector("#teamtwo-shoot");
    var teamtwo_numshots = document.querySelector("#teamtwo-numshots");
    var teamtwo_numhits = document.querySelector("#teamtwo-numhits");

    var resetButton = document.querySelector("#reset")
    var resetCount = document.querySelector("#num-resets");

    teamone_shootButton.addEventListener("click", function() {
      //console.log("teamone_shoot clicked");
      let newteam1Shots = parseInt(teamone_numshots.innerHTML) + 1;
      //console.log("newteam1Shots",newteam1Shots);
      teamone_numshots.innerHTML = newteam1Shots;

      //return Math.floor(Math.random() * (max - min)) + min;
      let RandomNumber = Math.floor(Math.random() * 10) + 1;
      //return Math.floor(Math.random() * (max - min)) + min;
      console.log("RandomNumber", RandomNumber);

      //function isEven(x) { return (x%2)==0; }
      if ((RandomNumber %2)==0) {
        let newteam1Hits = parseInt(teamone_numhits.innerHTML) + 1;
        teamone_numhits.innerHTML = newteam1Hits;
      }
      console.log("team1Hits", teamone_numhits.innerHTML);
  })

    teamtwo_shootButton.addEventListener("click", function() {
      console.log("teamtwo-shoot clicked");
      let newteam2Shots = parseInt(teamtwo_numshots.innerHTML) + 1;
      //console.log("newteam2Shots",newteam2Shots);
      teamtwo_numshots.innerHTML = newteam2Shots;

      //return Math.floor(Math.random() * (max - min)) + min;
      let RandomNumber = Math.floor(Math.random() * 10) + 1;
      //return Math.floor(Math.random() * (max - min)) + min;
      console.log("RandomNumber", RandomNumber);

      //function isEven(x) { return (x%2)==0; }
      if ((RandomNumber %2)==0) {
        let newteam2Hits = parseInt(teamtwo_numhits.innerHTML) + 1;
        teamtwo_numhits.innerHTML = newteam2Hits;
      }
      console.log("team2Hits", teamtwo_numhits.innerHTML);

    })

    resetButton.addEventListener("click", function() {
      console.log("reset clicked");
      let newResetCount = parseInt(resetCount.innerHTML) + 1
      resetCount.innerHTML = newResetCount;
      newteam1Shots = 0;
      teamone_numshots.innerHTML = newteam1Shots;
      newteam2Shots = 0;
      teamtwo_numshots.innerHTML = newteam2Shots;
      newteam1Hits = 0;
      teamone_numhits.innerHTML = newteam1Hits;
      newteam2Hits = 0;
      teamtwo_numhits.innerHTML = newteam2Hits;

    })


}


})();
