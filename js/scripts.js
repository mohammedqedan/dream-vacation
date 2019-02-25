
// Business (or back-end) logic:
var weatherFun =function(weather){
  if (weather == 1)
    return "Dubai"
  else if (weather == 2)
    return "Mexico"
  else if (weather == 3)
    return "Montana"
  else
    return "Japan"
}

var quietFun =function(quiet){
  if (quiet== 1)
    return "Alaska"
  else if (quiet == 2)
    return "Vancouver BC"
}

var summerFun =function(summer){
  if (summer == 1)
    return "honolulu"
  else if (summer == 2)
    return "bahamas"
}

var timeGoneFun =function(time_gone){
  if (time_gone == 1)
    return "Paris"
  else if (time_gone == 2)
    return "Tokyo"
}

var budgetFun =function(budget){
  if (budget == 1)
    return "Seaside"
  else if (budget == 2)
    return "Seattle"
  else if (budget == 3)
    return "Chicago"
  else
    return "New York"
}

// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
  $("form#vacation").submit(function() {
    event.preventDefault();
    var vacation ="";
    var weather = $("#weather option:selected").val();
    var quiet = $("#quiet option:selected").val();
    var summer = $("#summer option:selected").val();
    var time_gone = $("#time_gone option:selected").val();
    var budget = $("#budget option:selected").val();
    console.log("weather = " + weather);
    console.log("quiet = " + quiet);
    console.log("summer = " + summer);
    console.log("time_gone = " + time_gone);
    console.log("budget = " + budget);
    vacation = weatherFun(weather);
      console.log(vacation);
    vacation = quietFun(quiet);
      console.log(vacation);
    vacation = summerFun(summer);
      console.log(vacation);
    vacation = timeGoneFun(time_gone);
      console.log(vacation);
    vacation = budgetFun(budget);
    console.log(vacation);
    $("#output").text(vacation);
  });
});
