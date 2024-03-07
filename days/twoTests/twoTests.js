let timeTwoTests = null;

async function start2tests() {
    return new Promise(resolve => {
        // document.getElementById("startButton").style.display = "inline";
        // document.getElementById("redButton").style.display = "inline";
        // document.getElementById("blueButton").style.display = "inline";
        // document.getElementById("gameScreen").style.display = "inline";
        // document.getElementById("startButton").onclick = function () {
        let my_awesome_script = document.createElement('script');
        my_awesome_script.setAttribute('src', '../../functions/orientation.js');
        // my_awesome_script.src = "../functions/orientation.js";
        document.body.appendChild(my_awesome_script);
        document.getElementById("startButton").style.display = "none";
        // platform.saveSession(studySessionData, true);
        getMillisec();
        let startIntervalTest = async function () {
            let startBeforeStar = await startInterval2Tests();
            if (startBeforeStar == "done1") {
                clearInterval(sessionInterval2Test);
                reset_blueCar();
                reset_redCar();
                setTimeout(() => {
                    document.getElementById("redButton").style.display = "none";
                    document.getElementById("blueButton").style.display = "none";
                    document.getElementById("startStarTestButton").style.display = "inline";
                    document.getElementById("iframe-element").src = "../../timer/timer.html";
                    // document.getElementById('iframe-element').classList.remove('hidden');
                    document.getElementById("iframe-element").style.top = "23%";
                    document.getElementById("iframe-element").style.display = "inline";
                }, 1000);
                setTimeout(() => {
                    document.getElementById("startStarTestButton").style.display = "none";
                    document.getElementById("iframe-element").style.display = "none";
                    document.getElementById("iframe-element").src = "";
                    document.getElementById("redButton").style.display = "inline";
                    document.getElementById("blueButton").style.display = "inline";
                    let startStarTest = async function () {
                        showStars();
                        let endStar = await startIntervalStar();
                        if (endStar == "done2") {
                            clearInterval(sessionIntervalStar);
                            reset_blueCar();
                            reset_redCar();
                            document.getElementById("redButton").style.display = "none";
                            document.getElementById("blueButton").style.display = "none";
                            setTimeout(() => {
                                // document.getElementById("redButton").style.display = "none";
                                // document.getElementById("blueButton").style.display = "none";
                                document.getElementById("startAfterStarTestButton").style.display = "inline";
                                document.getElementById("iframe-element2").style.top = "1%"
                                document.getElementById("iframe-element2").src = "../../timer/timer2.html";
                                document.getElementById('iframe-element2').classList.remove('hidden');
                                document.getElementById("iframe-element2").style.display = "inline";
                            }, 500)
                            setTimeout(() => {
                                document.getElementById("startAfterStarTestButton").style.display = "none";
                                document.getElementById("iframe-element2").style.display = "none";
                                document.getElementById("iframe-element2").src = "";
                                document.getElementById("redButton").style.display = "inline";
                                document.getElementById("blueButton").style.display = "inline";
                                clearInterval(sessionIntervalStar);
                                let afterStarTest = async function () {
                                    let afterStar = await startInterval2Tests2();
                                    if (afterStar == "done3") {
                                        // document.getElementById("blueButton").style.display = "none";
                                        // document.getElementById("redButton").style.display = "none";
                                        clearInterval(sessionInterval2Test2);
                                        reset_blueCar();
                                        reset_redCar();
                                        console.log("After star")
                                        let startSpeeds = async function () {
                                            clearInterval(sessionInterval2Test2);
                                            let endSpeedsTest = await startIntervalSpeeds();
                                            if (endSpeedsTest == "done4") {
                                                clearInterval(sessionIntervalSpeeds);
                                                reset_blueCar();
                                                reset_redCar();
                                                document.getElementById("blueButton").style.display = "none";
                                                document.getElementById("redButton").style.display = "none";
                                                resolve("done");
                                            }
                                        }
                                        startSpeeds()
                                    }
                                }
                                afterStarTest();
                            }, 6000)
                        }

                    }
                    startStarTest();
                }, 17000)
            }
        }
        startIntervalTest();
        // }
    })
}
