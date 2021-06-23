let url = "https://divine-morning-31b8.skk-kaos-ranking.workers.dev/api/getClimberData";


$(document).ready(() => {
  $.getJSON(url, function(data) {
    console.log(data);
    
    for(let climber in data) {
      let stats = data[climber].split("-");
      
      console.log(stats);
      
      let totalPoints = 0;
      
      let gradeIndex = 0;
      
      console.log(climber);
      for(let gradeStat of stats) {
        let sends = parseInt(gradeStat.substring(0,3));
        let flashes = parseInt(gradeStat.substring(3));
        
        console.log(sends,flashes);
        
        let gradePoints =  50 * sends * (2 * gradeIndex + 3);
        
        totalPoints += gradePoints;
            
        gradeIndex++;
      }
      
      console.log(climber, totalPoints);
    }
  });
})
