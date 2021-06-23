let url = "https://divine-morning-31b8.skk-kaos-ranking.workers.dev/api/getClimberData";

let climbers = [];

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
        
        let gradePoints =  50 * sends * (gradeIndex + 1) + 50 * flashes * (gradeIndex+2);
        
        totalPoints += gradePoints;
            
        gradeIndex++;
      }
      
      climbers.push({"first": climber.split(" ")[0], "second": climber.split(" ")[1], "points": totalPoints};
    }
    
    climbers.sort((climber1, climber2) => {
      return climber1.points > climber2.points;
    })
    
    for(let climber of climbers) {
      $("tbody").after('<tr><th scope="row">1</th><td>' + climber.split(" ")[0] + '</td><td>' + climber.split(" ")[1] + '</td><td>' + totalPoints + '</td></tr>');
    }
  });
})
