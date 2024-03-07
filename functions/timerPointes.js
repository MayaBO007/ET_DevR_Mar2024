
async function onloadPics() {
    return new Promise(resolve => {
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        resolve("OK");
    })
};

const daysMissedNum = [];
let daysMissing = [];
let findlastIndexM = null;
let lastTimestampM = null;
let IndexM = null;

const daysMissed = {
    daysMissedNum: daysMissedNum
};

async function getIndexMissedDays(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("daysMissedNum")) {
            findlastIndexM = data[i].createdAt;
            if (lastTimestampM == null) {
                lastTimestampM = findlastIndexM;
                IndexM = i;
            } else if (findlastIndexM > lastTimestampM) {
                lastTimestampM = findlastIndexM;
                IndexM = i;
            }
        }
    }
    return IndexM;
}

let now = null;
function msCount() {
    msIntAll = setInterval(function setTimer() {
        now = now + 50;
        if (now >= 1000000) {
            clearInterval(msIntAll);
        }
    }, 50);
};


let milliseconds = null
function getMillisec() {
    milliseconds = new Date().getTime();
    return milliseconds;
}

red_yellow = false;
blue_yellow = false;

function yellowRed() {
    red_yellow = true;
    // console.log("red_yellow_touch");
};

function yellowBlue() {
    blue_yellow = true;
    // console.log("blue_yellow");
};
// async function getIndexSessionData(data) {
//     let i = data.length - 1;
//     while (i >= 0) {
//         if (data[i].hasOwnProperty("doneDay1")) {
//             break;
//         }
//         i--;
//     }
//     return i;
// };

let findlastIndex = null;
let lastTimestamp = null;
let indexI = null;

async function getIndexSessionData(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("startDate")) {
            findlastIndex = data[i].createdAt;
            if (lastTimestamp == null) {
                lastTimestamp = findlastIndex;
                indexI = i;
            } else if (findlastIndex > lastTimestamp) {
                lastTimestamp = findlastIndex;
                indexI = i;
            }
        }
    }

    return indexI;
}


function dayDate() {
    if (studySessionData.startDate.substring(2, 3) == ":") {
        let dayDate = studySessionData.startDate.substring(0, 2);
        return dayDate;
    } else {
        let dayDate = studySessionData.startDate.substring(1, 2);
        return dayDate;
    }
}
// const d = new Date();
// function getStartDate() {
//     let day = d.getDate();
//     let month = 1 + d.getMonth();
//     let year = d.getFullYear();
//     day = checkTime(day);
//     month = checkTime(month);
//     return day + ':' + month + ":" + year;
// }

const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let ms = d.getMilliseconds();
h = checkTime(h);
m = checkTime(m);
s = checkTime(s);
ms = checkTime(ms);
let startTime = h + ":" + m + ":" + s + ":" + ms;


// function getStartDate() {
//     let day = d.getDate();
//     let month = 1 + d.getMonth();
//     let year = d.getFullYear();
//     day = checkTime(day);
//     month = checkTime(month);
//     return day + ':' + month + ":" + year;
// }


function checkTime(i) {
    if (i < 10) { i = "0" + i }
    else { i = i };
    return i;
};


function getTodayStartTime() {
    let todayStartDetails = new Date();
    let hToday = todayStartDetails.getHours();
    let mToday = todayStartDetails.getMinutes();
    let sToday = todayStartDetails.getSeconds();
    let msToday = todayStartDetails.getMilliseconds();
    hToday = checkTime(hToday);
    mToday = checkTime(mToday);
    sToday = checkTime(sToday);
    msToday = checkTime(msToday);
    let startTimeToday = hToday + ":" + mToday + ":" + sToday + ":" + msToday;
    return startTimeToday;
}

function getTodayDate() {
    let todayStartDetails = new Date();
    let dayToday = todayStartDetails.getDate();
    let monthToday = 1 + todayStartDetails.getMonth();
    let yearToday = todayStartDetails.getFullYear();
    dayToday = checkTime(dayToday);
    monthToday = checkTime(monthToday);
    let today = dayToday + ':' + monthToday + ":" + yearToday;
    return (today);

}

function timeToWait() {
    let todayEndDetails = new Date();
    let hToday = todayEndDetails.getHours();
    let mToday = todayEndDetails.getMinutes();
    let sToday = todayEndDetails.getSeconds();
    let msToday = todayEndDetails.getMilliseconds();
    hChange = (28 - checkTime(hToday)) * 3600000;
    mChange = (60 - checkTime(mToday)) * 60000;
    sChange = (60 - checkTime(sToday)) * 1000;
    msChange = (999 - checkTime(msToday));

    let msToWait = hChange + mChange + sChange + msChange;
    return (msToWait);
}


let studySessionData = {
    startDate: "",
    doneInstructions: "",
    isDayDone: "",
    doneTest1: "",
    doneTest2: "",
    expDaysDate: "",
    userDevice: ""
};

function deleteFromSessionData() {
    delete studySessionData._id;
    delete studySessionData.createdAt;
    delete studySessionData.subId;
}

function updateDates() {
    let fullDate = new Date();
    let timeNow = getTodayStartTime();
    let today = getTodayDate();
    let date = new Date;
    let yesterday = new Date(date.setDate(date.getDate() - 1));
    if ((studySessionData == undefined) || (studySessionData.doneInstructions == "")) {
        return
    } else if ((studySessionData.isDayDone == "") && (studySessionData.doneInstructions != "")) {
        lastGame = null;
        yesterdayPlusOne = null;
    } else {
        lastGame = new Date(studySessionData.expDaysDate);
        lastGame2 = new Date(studySessionData.expDaysDate);
        yesterdayPlusOne = lastGame2.setDate(lastGame2.getDate() + 1);
        yesterdayPlusOne = new Date(yesterdayPlusOne)
    }
    return { fullDate, timeNow, today, yesterday, yesterdayPlusOne, lastGame }
}


const todayHeb = ":היום הרווחת";
const redCoinsHeb = ":נקודות אדומות";
const blueCoinsHeb = ":נקודות כחולות";
const yellowCoinsHeb = ":נקודות צהובות";
const seeYouTomorrowHeb = "(:!נתראה מחר";
const gameOverHeb = "!המשחק הסתיים";
const totWinsBlueHeb = ":סה״כ נקודות כחולות שנצברו";
const totWinsRedHeb = ":סה״כ נקודות אדומות שנצברו";
const totWinsYellowHeb = ":סה״כ נקודות צהובות שנצברו";
const thanksForPlayingHeb = "!תודה ששיחקתם";
const contectUsHeb = "אנא פנו אלינו במייל";

function showWinningsEnd(sum) {
    document.getElementById("blueButton").style.display = "none";
    document.getElementById("redButton").style.display = "none";
    document.getElementById("endOfGameMessage").style.display = "inline";
    document.getElementById("gameOver").innerHTML = gameOverHeb;
    document.getElementById("totWinsBlue").innerHTML = sum.blueSum + " " + totWinsBlueHeb;
    document.getElementById("totWinsRed").innerHTML = sum.redSum + " " + totWinsRedHeb;
    document.getElementById("totWinsYellow").innerHTML = sum.yellowSum + " " + totWinsYellowHeb;
    document.getElementById("thanksForPlaying").innerHTML = thanksForPlayingHeb;
    document.getElementById("contectUs").innerHTML = contectUsHeb;
}

function showWinnings() {

    let redWinsLength = correctFirstRedPress.length + correctFirstRedPressStar.length + correctFirstRedPressSpeeds.length; //+ correctRedPressDevtest.length
    let blueWinsLength = correctFirstBluePress.length + correctFirstBluePressStar.length + correctFirstBluePressSpeeds.length; //+ correctBluePressDevtest.length
    let yellowWinsLength = correctYellowPress.length + correctYellowPressStar.length + correctYellowPressSpeeds.length; //+ correctBluePressDevtest.length
    document.getElementById("blueButton").style.display = "none";
    document.getElementById("redButton").style.display = "none";
    document.getElementById("endOfDayMessage").style.display = "inline";
    document.getElementById("todayWins").innerHTML = todayHeb;
    document.getElementById("redWins").innerHTML = redWinsLength + " " + redCoinsHeb;
    document.getElementById("blueWins").innerHTML = blueWinsLength + " " + blueCoinsHeb;
    document.getElementById("yellowWins").innerHTML = yellowWinsLength + " " + yellowCoinsHeb;
    document.getElementById("seeYouTomorrow").innerHTML = seeYouTomorrowHeb;
}

function hideWinnings() {
    document.getElementById("endOfDayMessage").style.display = "none";
    document.getElementById("todayWins").innerHTML = "";
    document.getElementById("redWins").innerHTML = "";
    document.getElementById("blueWins").innerHTML = "";
    document.getElementById("yellowWins").innerHTML = "";
    document.getElementById("seeYouTomorrow").innerHTML = "";
}
function hideWinningsEnd() {
    document.getElementById("endOfGameMessage").style.display = "none";
    document.getElementById("gameOver").innerHTML = "";
    document.getElementById("totWinsBlue").innerHTML = "";
    document.getElementById("totWinsRed").innerHTML = "";
    document.getElementById("totWinsYellow").innerHTML = "";
    document.getElementById("thanksForPlaying").innerHTML = "";
    document.getElementById("contectUs").innerHTML = "";
}

function timeToFive() {
    let updatedDates = updateDates();
    let hours = updatedDates.fullDate.getHours();
    let minutes = updatedDates.fullDate.getMinutes();
    timeToWait = ((24 - hours) * 60 + (60 - minutes) + 300) * 1000;
    return timeToWait;
}

function timeToFiveSameDay() {
    let updatedDates = updateDates();
    let hours = updatedDates.fullDate.getHours();
    let minutes = updatedDates.fullDate.getMinutes();
    timeToWait = ((5 - hours) * 60 + (60 - minutes)) * 1000;
    return timeToWait;
}

async function sumCorrectFirstPress() {
    return new Promise((resolve, reject) => {
        platform.getAllSessions().then((data) => {
            let totalBlueSum = 0;
            let totalRedSum = 0;
            let totalYellowSum = 0;

            data.forEach((entry) => {
                for (const key in entry) {
                    if (key.startsWith('correctFirstBluePress')) {
                        const pressArray = entry[key];
                        totalBlueSum += pressArray.length;
                    } else if (key.startsWith('correctFirstRedPress')) {
                        if (key == 'correctFirstRedPressDevtest') {
                            continue;
                        }
                        const pressArray = entry[key];
                        totalRedSum += pressArray.length;
                    } else if (key.startsWith('correctYellowPress')) {
                        const pressArray = entry[key];
                        totalYellowSum += pressArray.length;
                    }
                }
            });
            const sum = { blueSum: totalBlueSum, redSum: totalRedSum, yellowSum: totalYellowSum };
            totalBlues.push(sum.blueSum);
            totalReds.push(sum.redSum);
            totalYellows.push(sum.yellowSum);


            resolve(sum);
        })
            .catch((error) => {
                reject(error);
            });
    });
};

//jQuery plugin
// jQuery.fn.ForceNumericOnly =
//     function () {
//         return this.each(function () {
//             $(this).keydown(function (e) {
//                 var key = e.charCode || e.keyCode || 0;
//                 // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
//                 return (
//                     key == 8 ||
//                     key == 9 ||
//                     key == 46 ||
//                     (key >= 37 && key <= 40) ||
//                     (key >= 48 && key <= 57) ||
//                     (key >= 96 && key <= 105));
//             })
//         })
//     };


// ***** consts: **** 

const correctFirstRedPress = [];
const correctFirstBluePress = [];
const correctRedPress = [];
const correctBluePress = [];
const incorrectRedPress = [];
const incorrectBluePress = [];
const redChoice = [];
const blueChoice = [];
const allRedPresses = [];
const allBluePresses = [];
const allCorrectFirstPress = [];
const allChoices = [];

const correctFirstRedPressStar = [];
const correctFirstBluePressStar = [];
const correctRedPressStar = [];
const correctBluePressStar = [];
const correctYellowPressStar = [];
const incorrectRedPressStar = [];
const incorrectBluePressStar = [];
const redChoiceStar = [];
const blueChoiceStar = [];
const yellowChoiceStar = [];
const allRedPressesStar = [];
const allBluePressesStar = [];
const allCorrectFirstPressStar = [];
const allChoicesStar = [];
const allStars = [];
const howManyStars = [];

const correctYellowPress = [];
// const correctFirstBluePressYellow = [];
// const correctRedPressYellow = [];
// const correctBluePressYellow = [];
// const incorrectRedPressYellow = [];
// const incorrectBluePressYellow = [];
// const redChoiceYellow = [];
// const blueChoiceYellow = [];
const yellowChoice = [];
// const allRedPressesYellow = [];
// const allBluePressesYellow = [];
// const allCorrectFirstPressYellow = [];
// const allChoicesYellow = [];
// const howManyYellows = [];

const correctFirstRedPressSpeeds = [];
const correctFirstBluePressSpeeds = [];
const correctRedPressSpeeds = [];
const correctBluePressSpeeds = [];
const incorrectRedPressSpeeds = [];
const incorrectBluePressSpeeds = [];
const correctYellowPressSpeeds = [];
const redChoiceSpeeds = [];
const blueChoiceSpeeds = [];
const yellowChoiceSpeeds = [];
const allRedPressesSpeeds = [];
const allBluePressesSpeeds = [];
const allCorrectFirstPressSpeeds = [];
const allChoicesSpeeds = [];

const correctFirstRedPressDevtest = [];
const correctFirstBluePressDevtest = [];
const correctRedPressDevtest = [];
const correctBluePressDevtest = [];
const correctYellowPressDevtest = [];
const incorrectRedPressDevtest = [];
const incorrectBluePressDevtest = [];
const redChoiceDev = [];
const blueChoiceDev = [];
const yellowChoiceDev = [];
const allRedPressesDev = [];
const allBluePressesDev = [];
const allCorrectFirstPressDev = [];
const allChoicesDev = [];
const devButton = [];
const devColorInput = [];

// const correctFirstRedPressButtons = [];
// const correctFirstBluePressButtons = [];
// const correctRedPressButtons = [];
// const correctBluePressButtons = [];
// const incorrectRedPressButtons = [];
// const incorrectBluePressButtons = [];
// const redChoiceButtons = [];
// const blueChoiceButtons = [];
// const yellowChoiceButtons = [];
// const allRedPressesButtons = [];
// const allBluePressesButtons = [];
// const allCorrectFirstPressButtons = [];
// const allChoicesButtons = [];

const totalBlues = [];
const totalReds = [];
const totalYellows = [];

let countingCars = null;
