function createVampire(name, pet = "bat", thirsty = true) {
  var vampire = {
    name: name,
    pet: pet,
    thirsty: thirsty,
    ouncesDrank: 0
  }
  return vampire;
}

function encounterDeliciousVictim(vampire){
  if (vampire.thirsty === true) {
    return `I WANT TO SUCK YOUR BLOOD!`;
  }
  else if (vampire.thirsty === false){
    return `No thanks, I am too full.`
  }
}

function drink(vampire){
  if (vampire.thirsty === true && vampire.ouncesDrank < 50){
    vampire.ouncesDrank += 10;
  }
  if (vampire.ouncesDrank >= 50){
    vampire.thirsty = false;
  }
  return vampire;
}

function inquirePlace(locations, location){
  if (locations.includes(location)){
    return `Yes, I have spent some time in ${location}.`
  }
  else {
    return `No, I have never been to ${location}.`
  }
}

function findBatLovers(vampires){
  var batLovers = []
  for (var i = 0; i < vampires.length; i++){
    if (vampires[i].pet === "bat"){
      batLovers.push(vampires[i].name);
    }
  }
  return batLovers;
}
module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}