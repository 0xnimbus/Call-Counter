let total = 0;
let cna = 0;
let fu = 0;
let declined = 0;
let te = 0;
let texting = 0; 
let toDM = 0;
let meeting = 0;  
let followedUp = 0;

// CNA 
document.getElementById("cnaDecrease").onclick = function(){
    total = total - 1;
    cna = cna - 1;
    document.getElementById("CNALabel").innerHTML = cna;
    document.getElementById("total").innerHTML = total;
}

document.getElementById("cnaIncrease").onclick = function(){
    total = total + 1;
    cna = cna + 1; 
    document.getElementById("CNALabel").innerHTML = cna;
    document.getElementById("total").innerHTML = total;
}

// FU
document.getElementById("fuDecrease").onclick = function(){
    total = total - 1;
    fu = fu - 1;
    document.getElementById("FULabel").innerHTML = fu;
    document.getElementById("total").innerHTML = total;
}

document.getElementById("fuIncrease").onclick = function(){
    total = total + 1;
    fu = fu + 1; 
    document.getElementById("FULabel").innerHTML = fu;
    document.getElementById("total").innerHTML = total;
}

// Declined
document.getElementById("declinedDecrease").onclick = function(){
    total = total - 1;
    declined = declined - 1;
    document.getElementById("declinedLabel").innerHTML = declined;
    document.getElementById("total").innerHTML = total;
}

document.getElementById("declinedIncrease").onclick = function(){
    total = total + 1;
    declined = declined + 1; 
    document.getElementById("declinedLabel").innerHTML = declined;
    document.getElementById("total").innerHTML = total;
}

// To Email
document.getElementById("TEDecrease").onclick = function(){
    total = total - 1;
    te = te - 1;
    document.getElementById("TELabel").innerHTML = te;
    document.getElementById("total").innerHTML = total;
}

document.getElementById("TEIncrease").onclick = function(){
    total = total + 1;
    te = te + 1; 
    document.getElementById("TELabel").innerHTML = te;
    document.getElementById("total").innerHTML = total;
}

// Texting
document.getElementById("textingDecrease").onclick = function(){
    total = total - 1;
    texting = texting - 1;
    document.getElementById("textingLabel").innerHTML = texting;
    document.getElementById("total").innerHTML = total;
}

document.getElementById("textingIncrease").onclick = function(){
    total = total + 1;
    texting = texting + 1; 
    document.getElementById("textingLabel").innerHTML = texting;
    document.getElementById("total").innerHTML = total;
}

// To DM
document.getElementById("toDMDecrease").onclick = function(){
    total = total - 1;
    toDM = toDM - 1;
    document.getElementById("toDMLabel").innerHTML = toDM;
    document.getElementById("total").innerHTML = total;
}

document.getElementById("toDMIncrease").onclick = function(){
    total = total + 1;
    toDM = toDM + 1; 
    document.getElementById("toDMLabel").innerHTML = toDM;
    document.getElementById("total").innerHTML = total;
}

// Meeting Booked 
document.getElementById("meetingDecrease").onclick = function(){
    total = total - 1;
    meeting = meeting - 1;
    document.getElementById("meetingLabel").innerHTML = meeting;
    document.getElementById("total").innerHTML = total;
}

document.getElementById("meetingIncrease").onclick = function(){
    total = total + 1;
    meeting = meeting + 1; 
    document.getElementById("meetingLabel").innerHTML = meeting;
    document.getElementById("total").innerHTML = total;
}

// Followed Up  
document.getElementById("FUDecrease").onclick = function(){
    total = total - 1;
    followedUp = followedUp - 1;
    document.getElementById("followUpLabel").innerHTML = followedUp;
    document.getElementById("total").innerHTML = total;
}

document.getElementById("FUIncrease").onclick = function(){
    total = total + 1;
    followedUp = followedUp + 1; 
    document.getElementById("followUpLabel").innerHTML = followedUp;
    document.getElementById("total").innerHTML = total;
}



