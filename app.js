let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// word counter
let storyWords = story.split(' ');
let storyWordsLength = storyWords.length;

// word filter
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word)); // ! will help us check to see if the iterated word IS NOT included in the unnecessaryWords array and the the .filter will now return everything that is not matching unnecessaryWords
// console.log(betterWords);

// overused words counters
let reallyCounter = 0;
let veryCounter = 0;
let basicallyCounter = 0;
storyWords.forEach(word => {
  if (word === 'really') {
    reallyCounter ++;
  } else if (word === 'very') {
    veryCounter ++;
  } else if (word === 'basically') {
    basicallyCounter ++;
  };
});

// sentence counter
let sentenceCounter = 0;
storyWords.forEach(word => {
  if (word[word.length - 1] === '.' || word[word.length - 1] === '!') { // word.length - 1 will allow us to calculate the length of the word and then substract 1 to access the last index of the word
    sentenceCounter ++;
  };
});

// console logger function
const consoleLogger = (storyWordsLength, sentenceCounter, reallyCounter, veryCounter, basicallyCounter) => {
  console.log(`There are ${storyWordsLength} words in this paragraph.`);
  console.log(`There are ${sentenceCounter} sentences in this paragraph.`);
  console.log(`Really Count: ${reallyCounter}`)
console.log(`Very Count: ${veryCounter}`)
console.log(`Basically Count: ${basicallyCounter}`)
}
consoleLogger(storyWordsLength, sentenceCounter, reallyCounter, veryCounter, basicallyCounter)

// betterWords logger
console.log(betterWords.join(' '))