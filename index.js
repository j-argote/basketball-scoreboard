let homeEl = document.getElementById("home-el")
let homeScore = 0

let guestEl = document.getElementById("guest-el")
let guestScore = 0

//add 1 point to hometeam
function add1PointHome(){
    homeScore += 1
    homeEl.textContent = homeScore

    if(homeScore > guestScore){
        homeEl.style.color = "green"
        guestEl.style.color = "#BE123C"
    }
    else if(guestScore > homeScore){
        guestEl.style.color = "green"
        homeEl.style.color = "#BE123C"
    }
    else{
        guestEl.style.color = "#BE123C"
        homeEl.style.color = "#BE123C"
    }
}

//add 2 points to hometeam
function add2PointHome(){
    homeScore += 2
    homeEl.textContent = homeScore

    if(homeScore > guestScore){
        homeEl.style.color = "green"
        guestEl.style.color = "#BE123C"
    }
    else if(guestScore > homeScore){
        guestEl.style.color = "green"
        homeEl.style.color = "#BE123C"
    }
    else{
        guestEl.style.color = "#BE123C"
        homeEl.style.color = "#BE123C"
    }
}

//add 3 points to hometeam
function add3PointHome(){
    homeScore += 3
    homeEl.textContent = homeScore

    if(homeScore > guestScore){
        homeEl.style.color = "green"
        guestEl.style.color = "#BE123C"
    }
    else if(guestScore > homeScore){
        guestEl.style.color = "green"
        homeEl.style.color = "#BE123C"
    }
    else{
        guestEl.style.color = "#BE123C"
        homeEl.style.color = "#BE123C"
    }
}

//add 1 point to guest team
function add1PointGuest(){
    guestScore += 1
    guestEl.textContent = guestScore

    if(homeScore > guestScore){
        homeEl.style.color = "green"
        guestEl.style.color = "#BE123C"
    }
    else if(guestScore > homeScore){
        guestEl.style.color = "green"
        homeEl.style.color = "#BE123C"
    }
    else{
        guestEl.style.color = "#BE123C"
        homeEl.style.color = "#BE123C"
    }
}

//add 2 points to guest team
function add2PointGuest(){
    guestScore += 2
    guestEl.textContent = guestScore

    if(homeScore > guestScore){
        homeEl.style.color = "green"
        guestEl.style.color = "#BE123C"
    }
    else if(guestScore > homeScore){
        guestEl.style.color = "green"
        homeEl.style.color = "#BE123C"
    }
    else{
        guestEl.style.color = "#BE123C"
        homeEl.style.color = "#BE123C"
    }
}

//add 3 points to guest team
function add3PointGuest(){
    guestScore += 3
    guestEl.textContent = guestScore

    if(homeScore > guestScore){
        homeEl.style.color = "green"
        guestEl.style.color = "#BE123C"
    }
    else if(guestScore > homeScore){
        guestEl.style.color = "green"
        homeEl.style.color = "#BE123C"
    }
    else{
        guestEl.style.color = "#BE123C"
        homeEl.style.color = "#BE123C"
    }
}

//reset points to zero
function resetPoints(){
    homeScore = 0
    guestScore = 0
    
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore

    guestEl.style.color = "#BE123C"
    homeEl.style.color = "#BE123C"    
}