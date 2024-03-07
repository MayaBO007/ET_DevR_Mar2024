
const responsesStar = {
    todayDate: getTodayDate(),
    correctRedPressStar: correctRedPressStar,
    correctBluePressStar: correctBluePressStar,
    correctYellowPressStar: correctYellowPressStar,
    correctFirstRedPressStar: correctFirstRedPressStar,
    correctFirstBluePressStar: correctFirstBluePressStar,
    incorrectRedPressStar: incorrectRedPressStar,
    incorrectBluePressStar: incorrectBluePressStar,
    redChoiceStar: redChoiceStar,
    blueChoiceStar: blueChoiceStar,
    yellowChoiceStar: yellowChoiceStar,
    allRedPressesStar: allRedPressesStar,
    allBluePressesStar: allBluePressesStar,
    allStars: allStars,
    howManyStars: howManyStars

};

timeoutCountStar = 0;
saveAttemptStars = 0;
starNum = null;


redElement.addEventListener("touchstart", function () {
    allRedPressesStar.push(new Date().getTime() - milliseconds);
    redElement.style.transform = "translateY(10px)";
    redElement.style.webkitTransform = "translateY(10px)";
    setTimeout(() => {
        redElement.style.transform = "initial";
    }, 100); // Adjust the delay as needed
});
blueElement.addEventListener("touchstart", function () {
    allBluePressesStar.push(new Date().getTime() - milliseconds);
    blueElement.style.transform = "translateY(10px)";
    blueElement.style.webkitTransform = "translateY(10px)";
    setTimeout(() => {
        blueElement.style.transform = "initial";
    }, 100); // Adjust the delay as nee

});

function yellowPressStar() {
    if (red_yellow && blue_yellow) {
        correctYellowPressStar.push(new Date().getTime() - milliseconds);
        red_yellow = false;
        blue_yellow = false;
    }
}

async function getStarNum() {

    do {
        starNum = prompt("כמה כוכבים ספרת?", "");
    } while (starNum == null || starNum == "" || isNaN(parseInt(starNum)));
    return starNum;
};

//let sessionIntervalStar = null;
let endStar = null;
let countStar = 0;
async function startIntervalStar() {
    document.getElementById("redButton").style.display = "inline";
    document.getElementById("blueButton").style.display = "inline";
    document.getElementById("gameScreen").style.display = "inline";
    let randCount = randCountAirplane();
    return new Promise(resolve => {
        sessionIntervalStar = setInterval(
            function carMove() {
                let choseCar = randColorStar();
                // let carSpeed = randSpeedCar();
                buttonChoice = 0;
                redPress = 0;
                bluePress = 0;
                if (countStar >= randCount) {
                    clearInterval(sessionIntervalStar);
                    document.getElementById("yellowCar").style.display = "inline";
                    document.getElementById("yellowCar").style.animationPlayState = "running";
                    yellowChoiceStar.push(new Date().getTime() - milliseconds);
                    platform.saveSession(responsesStar, false);
                    blueElement.addEventListener("touchstart", yellowBlue);
                    redElement.addEventListener("touchstart", yellowRed);
                    setTimeout(() => {
                        startIntervalStar();
                        reset_yellowCar();
                        countStar = 0;
                        yellowPressStar();
                        redElement.removeEventListener("touchstart", yellowRed);
                        blueElement.removeEventListener("touchstart", yellowBlue);
                    }, 800);
                } else {
                    countStar++;
                    if (choseCar >= 0.5) {
                        redChoiceStar.push(new Date().getTime() - milliseconds);
                        document.getElementById("redCar").style.display = "inline";
                        document.getElementById("redCar").style.animationPlayState = "running";
                        // document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                        redClick = function () {
                            redPress++;
                            if (redPress == 1) {
                                correctFirstRedPressStar.push(new Date().getTime() - milliseconds);
                            } else {
                                correctRedPressStar.push(new Date().getTime() - milliseconds);
                            }
                        };
                        redElement.addEventListener("touchstart", redClick);
                        blueElement.onclick = function () {
                            incorrectBluePressStar.push(new Date().getTime() - milliseconds);
                        };

                        setTimeout(() => {
                            reset_redCar();
                            redElement.removeEventListener("touchstart", redClick);
                            blueElement.onclick = null;
                            // }, carSpeed * 1000);
                        }, 900);
                    } else {
                        blueChoiceStar.push(new Date().getTime() - milliseconds);
                        document.getElementById("blueCar").style.display = "inline";
                        document.getElementById("blueCar").style.animationPlayState = "running";
                        // document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                        redElement.onclick = function () {
                            incorrectRedPressStar.push(new Date().getTime() - milliseconds);
                        };
                        blueClick = function () {
                            bluePress++;
                            if (bluePress == 1) {
                                correctFirstBluePressStar.push(new Date().getTime() - milliseconds);
                            } else {
                                correctBluePressStar.push(new Date().getTime() - milliseconds);
                            }
                        }
                        blueElement.addEventListener("touchstart", blueClick);

                        setTimeout(() => {
                            reset_blueCar();
                            blueElement.removeEventListener("touchstart", blueClick)
                            redElement.onclick = null;
                        }, 900);
                        // }, carSpeed * 1000);
                    };

                };
            }, 1000);// (Maximal carSpeed)*1000

        let sessionTimerStar = setTimeout(function timecountStar() {
            // document.getElementById("blueButton").style.display = "none";
            // document.getElementById("redButton").style.display = "none";
            clearInterval(sessionIntervalStar);
            clearTimeout(sessionTimerStar);
            // reset_airplane();
            // reset_blueCar();
            // reset_redCar();
            timeoutCountStar++;
            endStar = 1;
            if (timeoutCountStar == 1) {
                getStarNum().then((starNum) => {
                    howManyStars.push(starNum);
                    function savingStars() {
                        platform.saveSession(responsesStar, false).then(() => {
                            resolve("done2");
                        }).catch(() => {
                            if (saveAttemptStars >= 1000) {
                                document.getElementById("problem").style.display = "inline";
                            } else {
                                saveAttemptStars++;
                                savingStars()
                            }
                        });
                    }
                    savingStars();
                })
            } else {
                clearInterval(sessionIntervalStar);
                clearTimeout(sessionTimerStar);
                // reset_airplane();
                // reset_blueCar();
                // reset_redCar();
            }
        }, 90000);
        // }, 30000);
    })
};


function showStars() {
    function repeatShowStar() {
        document.getElementById('star').style.top = randTopStars() + "%";
        document.getElementById('star').style.left = randLeftStars() + "%";
        document.getElementById('star').style.display = "inline";
        setTimeout(() => {
            document.getElementById('star').style.display = "none";
            timeoutForStar();
        }, 1000);
    }

    function timeoutForStar() {
        let repeat = setTimeout(() => {
            if (endStar == 1) {
                clearTimeout(repeat);
                document.getElementById('star').style.display = "none";
                document.getElementById('star').style.animationPlayState = "paused";
            } else {
                repeatShowStar()
            }
        }, randTimeStars());
    }
    timeoutForStar();
};