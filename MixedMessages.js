const subjects = ["I", "He", "They", "She", "We"];
const verbs = ["walk", "run", "climb", "dance", "eat", "sleep", "wash",  "accelerated", "jump", "talk", "bark"];
const currentVerbs = ["walks", "runs", "climbs", "dances", "eats", "sleeps", "washes", "accelerates", "jumps", "talks", "barks"];
const adjectives = ["consistently", "effortlessly", "nervously", "doggedly", "dreamily", "elegantly", "angrily", "perfectly", "insufferably", "nauseatingly", "successfully", "eagerly"];
const locations = ["in the hotel", "in the room", "through the park", "in the bank", "by the bank", "in a ghost town", "in a store", "in jail", "at a game"]

let tempSubject = subjects[Math.floor(Math.random()*subjects.length)];
let tempPresentVerbs = verbs[Math.floor(Math.random()*verbs.length)];
let tempCurrentVerbs = currentVerbs[Math.floor(Math.random()*currentVerbs.length)];
let tempAdjectives = adjectives[Math.floor(Math.random()*adjectives.length)];
let tempLocations =  locations[Math.floor(Math.random()*locations.length)]

function generateSentence() {
    if (tempSubject === subjects[1] || tempSubject ===subjects[3]) {
        console.log(`${tempSubject} ${tempCurrentVerbs} ${tempAdjectives} ${tempLocations}.`);
    } else {
        console.log(`${tempSubject} ${tempPresentVerbs} ${tempAdjectives} ${tempLocations}`);
    }
}
generateSentence();
