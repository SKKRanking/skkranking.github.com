let url = "https://skk-ranking.herokuapp.com/getRankingData";

let climbers = [];

$(document).ready(() => {
  $.getJSON(url, function(data) {
    
    for(let climber of data) {
      let name = climber.Name;
      let flashes = climber.Flashes;
      let firstAscents = climber.FirstAscents;
      let sendsList = climber.Sends;
      
      let totalPoints = 25*firstAscents + 50*flashes;
      
      sendsList.forEach((value, i) => {
        totalPoints += (i+1) * value * 50;
      });
      
      climbers.push({"first": climber.name.split(" ")[0], "second": climber.name.split(" ")[1], "points": totalPoints});
    }
    
    climbers.sort((climber1, climber2) => {
      return climber1.points - climber2.points;
    })
    
    let climberIndex = climbers.length;
    for(let climber of climbers) {
      $("tbody").after('<tr><th scope="row">' + climberIndex.toString() + '</th><td>' + climber.first + '</td><td>' + climber.second + '</td><td>' + climber.points + '</td></tr>');
      
      climberIndex--;
    }
  });
})
