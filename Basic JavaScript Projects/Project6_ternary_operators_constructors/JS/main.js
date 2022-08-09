function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function age_function() {
    var Age, canVote;
    Age = document.getElementById("Age").value;
    canVote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Status").innerHTML = canVote;
}