var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var fs = require("fs");
var readline = require("readline");
var allWords = {};
var words1 = {};
var allWordsSorted = {};
processLineByLine();
function processLineByLine() {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var fileStream, rl, _d, rl_1, rl_1_1, word, isValidWord, wordInfo, wordLowerCase, wordPointValue, e_1_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    fileStream = fs.createReadStream("words.txt");
                    rl = readline.createInterface({
                        input: fileStream,
                        crlfDelay: Infinity,
                    });
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 12]);
                    _d = true, rl_1 = __asyncValues(rl);
                    _e.label = 2;
                case 2: return [4 /*yield*/, rl_1.next()];
                case 3:
                    if (!(rl_1_1 = _e.sent(), _a = rl_1_1.done, !_a)) return [3 /*break*/, 5];
                    _c = rl_1_1.value;
                    _d = false;
                    word = _c;
                    isValidWord = /^[a-zA-Z]+$/.test(word);
                    wordInfo = { pointValue: 0, word: "" };
                    if (isValidWord) {
                        wordLowerCase = word.toLowerCase();
                        wordPointValue = getWordPointValue(word);
                        wordInfo.pointValue = wordPointValue;
                        wordInfo.word = wordLowerCase;
                        storeWord(wordInfo);
                    }
                    _e.label = 4;
                case 4:
                    _d = true;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _e.trys.push([7, , 10, 11]);
                    if (!(!_d && !_a && (_b = rl_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _b.call(rl_1)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    console.log(allWords);
                    printObject();
                    //   printObject();
                    console.log(allWords);
                    console.log(words1);
                    console.log(allWordsSorted);
                    return [2 /*return*/];
            }
        });
    });
}
function printObject() {
    var sortedKeys = Object.keys(allWords).sort();
    var sortedWords = {};
    for (var _i = 0, sortedKeys_1 = sortedKeys; _i < sortedKeys_1.length; _i++) {
        var key = sortedKeys_1[_i];
        sortedWords[key] = allWords[key];
    }
    Object.keys(allWords).forEach(function (key) { return delete allWords[key]; });
    Object.assign(allWords, sortedWords);
    var jsonString = JSON.stringify(sortedWords, null, 2);
    fs.writeFileSync("output.txt", jsonString);
    console.log("Words object has been written to output.txt");
}
function storeWord(wordInfo) {
    var _a;
    var firstLetter = wordInfo.word[0];
    var wordLength = wordInfo.word.length;
    if (!allWords[firstLetter]) {
        allWords[firstLetter] = (_a = {}, _a[wordLength] = [wordInfo], _a);
    }
    else if (!allWords[firstLetter][wordLength]) {
        allWords[firstLetter][wordLength] = [wordInfo];
    }
    else {
        allWords[firstLetter][wordLength].push(wordInfo);
        allWords[firstLetter][wordLength].sort(function (a, b) {
            return a.word.localeCompare(b.word);
        });
    }
}
function getWordPointValue(word) {
    var wordPointValue = 0;
    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        wordPointValue += getLetterPointValue(letter);
    }
    return wordPointValue;
}
function getLetterPointValue(letter) {
    for (var _i = 0, allLetterPoints_1 = allLetterPoints; _i < allLetterPoints_1.length; _i++) {
        var letterPoint = allLetterPoints_1[_i];
        if (letterPoint.letters.includes(letter)) {
            return letterPoint.pointValue;
        }
    }
    return 0;
}
var letter1point = {
    pointValue: 1,
    letters: ["a", "e", "i", "o", "u", "l", "n", "s", "t", "r"],
};
var letter2point = {
    pointValue: 2,
    letters: ["d", "g"],
};
var letter3point = {
    pointValue: 3,
    letters: ["b", "c", "m", "p"],
};
var letter4point = {
    pointValue: 4,
    letters: ["f", "h", "v", "w", "y"],
};
var letter5point = {
    pointValue: 5,
    letters: ["k"],
};
var letter8point = {
    pointValue: 8,
    letters: ["j", "x"],
};
var letter10point = {
    pointValue: 10,
    letters: ["q", "z"],
};
var allLetterPoints = [
    letter1point,
    letter2point,
    letter3point,
    letter4point,
    letter5point,
    letter8point,
    letter10point,
];
