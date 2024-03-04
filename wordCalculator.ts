const fs = require("fs");
const readline = require("readline");

interface WordInfo {
  pointValue: number;
  word: string;
}

interface Letter {
  pointValue: number;
  letters: string[];
}

interface LetterObject {
  [length: number]: WordInfo[];
}

const allWords: Record<string, LetterObject> = {};
const words1: Record<string, LetterObject> = {};
const allWordsSorted: Record<string, LetterObject> = {};

processLineByLine();

async function processLineByLine() {
  const fileStream = fs.createReadStream("words.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const word of rl) {
    const isValidWord = /^[a-zA-Z]+$/.test(word);
    let wordInfo: WordInfo = { pointValue: 0, word: "" };
    if (isValidWord) {
      const wordLowerCase = word.toLowerCase();
      const wordPointValue: number = getWordPointValue(word);
      wordInfo.pointValue = wordPointValue;
      wordInfo.word = wordLowerCase;
      storeWord(wordInfo);
    }
  }
  console.log(allWords);

  printObject();
  //   printObject();

  console.log(allWords);
  console.log(words1);
  console.log(allWordsSorted);
}

function printObject() {
  const sortedKeys = Object.keys(allWords).sort();

  const sortedWords: Record<string, LetterObject> = {};
  for (const key of sortedKeys) {
    sortedWords[key] = allWords[key];
  }

  Object.keys(allWords).forEach((key) => delete allWords[key]);
  Object.assign(allWords, sortedWords);

  const jsonString = JSON.stringify(sortedWords, null, 2);

  fs.writeFileSync("output.txt", jsonString);

  console.log("Words object has been written to output.txt");
}

function storeWord(wordInfo: WordInfo) {
  const firstLetter = wordInfo.word[0];
  const wordLength = wordInfo.word.length;

  if (!allWords[firstLetter]) {
    allWords[firstLetter] = { [wordLength]: [wordInfo] };
  } else if (!allWords[firstLetter][wordLength]) {
    allWords[firstLetter][wordLength] = [wordInfo];
  } else {
    allWords[firstLetter][wordLength].push(wordInfo);
    allWords[firstLetter][wordLength].sort((a, b) =>
      a.word.localeCompare(b.word)
    );
  }
}

function getWordPointValue(word: string): number {
  let wordPointValue = 0;
  for (let i = 0; i < word.length; i++) {
    const letter: string = word[i];
    wordPointValue += getLetterPointValue(letter);
  }

  return wordPointValue;
}

function getLetterPointValue(letter: string): number {
  for (const letterPoint of allLetterPoints) {
    if (letterPoint.letters.includes(letter)) {
      return letterPoint.pointValue;
    }
  }

  return 0;
}

const letter1point: Letter = {
  pointValue: 1,
  letters: ["a", "e", "i", "o", "u", "l", "n", "s", "t", "r"],
};

const letter2point: Letter = {
  pointValue: 2,
  letters: ["d", "g"],
};

const letter3point: Letter = {
  pointValue: 3,
  letters: ["b", "c", "m", "p"],
};

const letter4point: Letter = {
  pointValue: 4,
  letters: ["f", "h", "v", "w", "y"],
};

const letter5point: Letter = {
  pointValue: 5,
  letters: ["k"],
};

const letter8point: Letter = {
  pointValue: 8,
  letters: ["j", "x"],
};

const letter10point: Letter = {
  pointValue: 10,
  letters: ["q", "z"],
};

const allLetterPoints: Letter[] = [
  letter1point,
  letter2point,
  letter3point,
  letter4point,
  letter5point,
  letter8point,
  letter10point,
];
