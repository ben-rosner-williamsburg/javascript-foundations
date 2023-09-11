function createTape(title,readyToPlay = false) {
    var tape = {
        title: title,
        readyToPlay: readyToPlay
    }
    return tape;
}

function reset(tape){
    if (tape.readyToPlay === false){
      tape.readyToPlay = true;
    }
    return tape;
}

function createCollection(tapeOne, tapeTwo, tapeThree){
    if (!tapeOne || !tapeTwo || !tapeThree){
        return `Your collection is empty.`
    }
    var collection = [];
    collection.push(tapeOne, tapeTwo, tapeThree);
    return collection;
}

function previewCollection(collection){
    var titles = []
    for (var i = 0; i < collection.length; i++) {
        titles.push(collection[i].title)
    }
    return titles;
}
module.exports = {
    createTape,
    reset,
    createCollection,
    previewCollection
}