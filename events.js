function eventmaker() {
    const times = ["11am","12pm","1pm","2pm",
    "3pm","4pm","5pm","6pm","7pm"];

    const activities = ["Open-Gym Basketball",
    "Open-Gym Volleyball","HardCORE 360",
    "Fearless HIIT", "Yoga Body Sculpt",
    "Fearless 30"];

    const trainers = ["Roger", "Rashaed", "Geo", "Alizae","Maxim"];

    var time = times[Math.floor(Math.random() * (times.length))];
    var activity = activities[Math.floor(Math.random() * (activities.length))];
    var trainer = trainers[Math.floor(Math.random() * (trainers.length))];

    return "<br>" + activity + " <br>Trainer: " + trainer + " <br>" +time; 
}

var dayEvent = new Array();

function create_Calender () {
        
    for(var i = 1; i <= 31; i++){
        dayEvent[i] = eventmaker();
    }

}   

create_Calender();
console.log(dayEvent[1]);
console.log(dayEvent[31]);