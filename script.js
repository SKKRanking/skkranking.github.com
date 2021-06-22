let url = "https://divine-morning-31b8.skk-kaos-ranking.workers.dev/api/getClimberData";


$(document).ready(() => {
  $.getJSON(url, function(data) {
    console.log(data);
    
    for(let climber in data) {
      let stats = data[climber].split("-");
      
      let totalPoints = 0;
      
      let gradeIndex = 0;
      
      console.log(climber);
      for(let gradeStat of stats) {
        let flashes = parseInt(gradeStat.substr(0,2));
        let sends = parseInt(gradeStat.substr(3,6));
        
        console.log(flashes,sends);
        
        let gradePoints =  50 * sends * (2 * gradeIndex + 3);
        
        totalPoints += gradePoints;
            
        gradeIndex++;
      }
      
      console.log(climber, totalPoints);
    }
  });
})
