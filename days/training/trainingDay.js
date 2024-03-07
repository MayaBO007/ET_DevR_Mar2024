
const responsesTrainingData = {
    todayDate: getTodayDate(),
    correctRedPress: correctRedPress,
    correctBluePress: correctBluePress,
    correctFirstRedPress: correctFirstRedPress,
    correctFirstBluePress: correctFirstBluePress,
    correctYellowPress: correctYellowPress,
    incorrectRedPress: incorrectRedPress,
    incorrectBluePress: incorrectBluePress,
    redChoice: redChoice,
    blueChoice: blueChoice,
    yellowChoice: yellowChoice,
    allRedPresses: allRedPresses,
    allBluePresses: allBluePresses,
    // allCorrectTrainingPress: allCorrectTrainingPress,
};

let redElement = document.getElementById("redButton");
let blueElement = document.getElementById("blueButton");
let redPress = 0;
let bluePress = 0;
let redClick;
let blueClick;


redElement.addEventListener("touchstart", function () {
    allRedPresses.push(new Date().getTime() - milliseconds);
    redElement.style.transform = "translateY(10px)";
    redElement.style.webkitTransform = "translateY(10px)";
    setTimeout(() => {
        redElement.style.transform = "initial";
    }, 100); // Adjust the delay as needed
});
blueElement.addEventListener("touchstart", function () {
    allBluePresses.push(new Date().getTime() - milliseconds);
    blueElement.style.transform = "translateY(10px)";
    blueElement.style.webkitTransform = "translateY(10px)";
    setTimeout(() => {
        blueElement.style.transform = "initial";
    }, 100); // Adjust the delay as nee

});
redElement.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
blueElement.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

function yellowPress() {
    if (red_yellow && blue_yellow) {
        correctYellowPress.push(new Date().getTime() - milliseconds);
        red_yellow = false;
        blue_yellow = false;
    }
}

let saveAttemptTraining = 0;
let count = 0; // counter for iterations
// 1=red, 2=blue buttons
let buttonChoice = null;
let sessionInterval = null;
let startGame = null;

async function trainingDay() {
    return new Promise(resolve => {
        document.getElementById("startButton").style.display = "inline";
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        document.getElementById("startButton").onclick = function () {
            document.getElementById("startButton").style.display = "none";
            function startIntervalTrainingDay() {
                let randCount = randCountAirplane();
                document.getElementById("redButton").style.display = "inline";
                document.getElementById("blueButton").style.display = "inline";
                document.getElementById("gameScreen").style.display = "inline";
                sessionIntervalTrainingDay = setInterval(
                    function carMove() {
                        let choseCar = randColor();
                        // let carSpeed = randSpeedCar();
                        buttonChoice = 0;
                        redPress = 0;
                        bluePress = 0;
                        if (count >= randCount) {
                            clearInterval(sessionIntervalTrainingDay);
                            document.getElementById("yellowCar").style.display = "inline";
                            document.getElementById("yellowCar").style.animationPlayState = "running";
                            yellowChoice.push(new Date().getTime() - milliseconds);
                            platform.saveSession(responsesTrainingData, false);
                            redElement.addEventListener("touchstart", yellowRed);
                            blueElement.addEventListener("touchstart", yellowBlue);
                            setTimeout(() => {
                                startIntervalTrainingDay();
                                reset_yellowCar();
                                count = 0;
                                yellowPress();
                                redElement.removeEventListener("touchstart", yellowRed);
                                blueElement.removeEventListener("touchstart", yellowBlue);
                            }, 800);
                        } else {
                            count++;
                            // document.getElementById("counter").innerHTML = count;
                            // document.getElementById("carColorShow").innerHTML = choseCar;
                            // document.getElementById("carSpeedShow").innerHTML = carSpeed;
                            // document.getElementById("finishedShow").innerHTML = "Started";
                            if (choseCar == 1) { // 1=red, 0=blue
                                redChoice.push(new Date().getTime() - milliseconds);
                                document.getElementById("redCar").style.display = "inline";
                                document.getElementById("redCar").style.animationPlayState = "running";
                                // document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                                redClick = function () {
                                    redPress++;
                                    if (redPress == 1) {
                                        correctFirstRedPress.push(new Date().getTime() - milliseconds);
                                    } else {
                                        correctRedPress.push(new Date().getTime() - milliseconds);
                                    }
                                };
                                redElement.addEventListener("touchstart", redClick);
                                document.getElementById("blueButton").onclick = function () {
                                    incorrectBluePress.push(new Date().getTime() - milliseconds);
                                };

                                setTimeout(() => {
                                    reset_redCar();
                                    redElement.removeEventListener("touchstart", redClick);
                                    blueElement.onclick = null;
                                    // document.getElementById("finishedShow").innerHTML = "Finished";
                                }, 900);
                                // }, carSpeed * 1000);
                            } else {
                                blueChoice.push(new Date().getTime() - milliseconds);
                                document.getElementById("blueCar").style.display = "inline";
                                document.getElementById("blueCar").style.animationPlayState = "running";
                                // document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                                document.getElementById("redButton").onclick = function () {
                                    incorrectRedPress.push(new Date().getTime() - milliseconds);
                                };
                                blueClick = function () {
                                    bluePress++;
                                    if (bluePress == 1) {
                                        correctFirstBluePress.push(new Date().getTime() - milliseconds);
                                    } else {
                                        correctBluePress.push(new Date().getTime() - milliseconds);
                                    }
                                }
                                blueElement.addEventListener("touchstart", blueClick);


                                setTimeout(() => {
                                    reset_blueCar();
                                    blueElement.removeEventListener("touchstart", blueClick);
                                    redElement.onclick = null;
                                    // document.getElementById("finishedShow").innerHTML = "Finished";
                                }, 900);//carSpeed * 1000);
                            }
                        }
                    }, 1000);// 1200);// (Maximal carSpeed)*1000

                let sessionTimerTrainingDay = setTimeout(function timeCount() {
                    clearTimeout(sessionTimerTrainingDay);
                    clearInterval(sessionIntervalTrainingDay);
                    function savingTraining() {
                        platform.saveSession(responsesTrainingData, false).then(() => {
                            // reset_airplane();
                            document.getElementById("blueButton").style.display = "none";
                            document.getElementById("redButton").style.display = "none";
                            resolve("done");
                        }).catch(() => {
                            if (saveAttemptTraining >= 2000) {
                                problemOrient();
                            } else {
                                saveAttemptTraining++;
                                savingTraining()
                            }
                        })
                    }
                    savingTraining()
                }, 300000);
                // }, 10000);
            }
            platform.saveSession(studySessionData, true).then(() => {
                startIntervalTrainingDay();
                getMillisec();
            });
        }
        // }
    })
}
