let scoreAway = document.getElementById("score-away")
let scoreHome = document.getElementById("score-home")

let countHome = 0
let countAway = 0


//score HOME

function incrementByOneHome () {
    if(countHome < 9){
        countHome += 1
        scoreHome.textContent = `0${countHome}`
    }else {
        countHome += 1
        scoreHome.textContent = countHome
    }
}

function incrementByTwoHome () {
    if(countHome < 8){
        countHome += 2
        scoreHome.textContent = `0${countHome}`
    }else {
        countHome += 2
        scoreHome.textContent = countHome
    }
}

function incrementByThreeHome () {
    if(countHome < 7){
        countHome += 3
        scoreHome.textContent = `0${countHome}`
    }else {
        countHome += 3
        scoreHome.textContent = countHome
    }
}

//score AWAY

function incrementByOneAway () {
    if(countAway < 9){
        countAway += 1
        scoreAway.textContent = `0${countAway}`
    }else {
        countAway += 1
        scoreAway.textContent = countAway
    }
}

function incrementByTwoAway () {
    if(countAway < 8){
        countAway += 2
        scoreAway.textContent = `0${countAway}`
    }else {
        countAway += 2
        scoreAway.textContent = countAway
    }
}

function incrementByThreeAway () {
    if(countAway < 7){
        countAway += 3
        scoreAway.textContent = `0${countAway}`
    }else {
        countAway += 3
        scoreAway.textContent = countAway
    }
}