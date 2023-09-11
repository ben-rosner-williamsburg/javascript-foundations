function createBarber(name, earnings = 0, haircuts = []){
    var barber = {
        name: name,
        earnings: earnings,
        haircuts: haircuts
    }
    return barber;
}

function giveCompliment(haircut){
    return `This ${haircut.style} looks great!`
}

function cutHair(barber, cut){
    barber.haircuts.push(cut)
    barber.earnings += cut.price
    return barber;
}

function listStyles(barber, cutLength) {
    var styles = []
    for (var i = 0; i < barber.haircuts.length; i++){
        if (barber.haircuts[i].hairLength === cutLength){
            styles.push(barber.haircuts[i].style);
        }
    }
    return styles;
}
module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
 };
