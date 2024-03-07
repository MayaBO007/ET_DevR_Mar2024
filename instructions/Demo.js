


let redPressDemo = null;
let bluePressDemo = null;
let yellowPressDemo = null;
let mistakeDemo = null;

async function demo() {
    return new Promise(resolve => {
        // let afterOnload = async function () {
        //     let startDemo = await onloadPics();
        //     if (startDemo == "OK") {
        // document.getElementById("gameScreen").onload = () => {

        document.getElementById("redButton").style.display = "flex";
        document.getElementById("blueButton").style.display = "flex";
        document.getElementById("gameScreen").style.display = "inline";
        // document.getElementById("ins12").style.display = "none";
        setTimeout(() => {
            document.getElementById("redCar").style.display = "inline";
            document.getElementById("redCar").style.animationPlayState = "running";
            document.getElementById("redCar").style.animationDuration = "1.5s"
            // document.getElementById("redCar").style.animationIterationCount = "1";
            document.getElementById("redButton").onclick = function () {
                redPressDemo = 1;
                document.getElementById("corrRed").style.display = "inline";
                document.getElementById("redCar").style.animationPlayState = "paused";
                document.getElementById("redCar").style.display = "none";
                setTimeout(function () {
                    document.getElementById("corrRed").style.display = "none";
                    document.getElementById("blueCar").style.display = "inline";
                    document.getElementById("blueCar").style.animationPlayState = "running";
                    // document.getElementById("blueCar").style.animationIterationCount = "1";
                    document.getElementById("blueCar").style.animationDuration = "1.5s"
                }, 1000);
                document.getElementById("blueButton").onclick = function () {
                    bluePressDemo = 1;
                    document.getElementById("blueCar").style.display = "none";
                    document.getElementById("blueCar").style.animationPlayState = "paused";
                    document.getElementById("corrBlue").style.display = "inline";
                    document.getElementById("blueButton").onclick = null;
                    document.getElementById("redButton").onclick = null;
                    setTimeout(function () {
                        document.getElementById("corrBlue").style.display = "none";
                        document.getElementById("yellowCar").style.display = "inline";
                        document.getElementById("yellowCar").style.animationPlayState = "running";
                        document.getElementById("yellowCar").style.animationDuration = "1s";
                        document.getElementById("redButton").addEventListener("touchstart", yellowRed);
                        document.getElementById("blueButton").addEventListener("touchstart", yellowBlue);
                        checkYellowPress = setInterval(() => {
                            if (red_yellow && !blue_yellow || blue_yellow && !red_yellow) {
                                document.getElementById("wrongYellow").style.display = "inline";
                                red_yellow = false;
                                blue_yellow = false;
                                setTimeout(() => {
                                    document.getElementById("wrongYellow").style.display = "none";
                                }, 2000);
                            } else if (red_yellow && blue_yellow) {
                                document.getElementById("corrYellow").style.display = "inline";
                                yellowPressDemo = 1;
                                clearInterval(checkYellowPress);
                                setTimeout(() => {
                                    document.getElementById("redButton").removeEventListener("touchstart", yellowRed);
                                    document.getElementById("blueButton").removeEventListener("touchstart", yellowBlue);
                                    document.getElementById("corrYellow").style.display = "none";
                                    document.getElementById("yellowCar").style.display = "none";
                                    document.getElementById("wrongYellow").style.display = "none";
                                }, 1000)
                            }
                        }, 2000);
                    }, 1000);

                    setTimeout(() => {
                        setInterval(() => {
                            if (yellowPressDemo == true) {
                                setTimeout(() => {
                                    resolve("done");
                                }, 1000);
                            }
                        }, 1000);
                    }, 4000);

                }
                document.getElementById("redButton").onclick = function () {
                    document.getElementById("wrongBlue").style.display = "inline";
                    setTimeout(() => {
                        document.getElementById("wrongBlue").style.display = "none";
                        document.getElementById("blueCar").style.display = "inline";
                        document.getElementById("blueCar").style.animationPlayState = "running";
                        // document.getElementById("blueCar").style.animationIterationCount = "1";
                        document.getElementById("blueCar").style.animationDuration = "1.5s"
                    }, 2000);
                }
            }
            document.getElementById("blueButton").onclick = function () {
                document.getElementById("wrongRed").style.display = "inline";
                setTimeout(() => {
                    document.getElementById("wrongRed").style.display = "none";
                    document.getElementById("redCar").style.display = "inline";
                    document.getElementById("redCar").style.animationPlayState = "running";
                    document.getElementById("redCar").style.animationDuration = "1.5s"
                    // document.getElementById("redCar").style.animationIterationCount = "1";
                }, 2000);
            }
            setTimeout(() => {
                if (redPressDemo == null || bluePressDemo == null) {
                    document.getElementById("pressButton").style.display = "inline";
                    setTimeout(function () {
                        document.getElementById("pressButton").style.display = "none";
                    }, 3000);
                }
            }, 60000);
            // }
            // }
            // afterOnload();
        }, 5000);

        setTimeout(() => {
            setInterval(() => {
                if (yellowPressDemo == true) {
                    setTimeout(() => {
                        resolve("done");
                    }, 1000);
                }
            }, 1000);
        }, 4000);
    });
}

// function yellowPress() {
//     if (red_yellow && blue_yellow) {
//         document.getElementById("corrYellow").style.display = "inline";
//         setTimeout(() => {
//             document.getElementById("redButton").removeEventListener("touchstart", yellowRed);
//             document.getElementById("blueButton").removeEventListener("touchstart", yellowBlue);
//             document.getElementById("corrYellow").style.display = "none";
//             document.getElementById("yellowCar").style.display = "none";
//             document.getElementById("wrongYellow").style.display = "none";
//             clearInterval(checkYellowPress);
//             return "done";
//         }, 1500)

//     }
// }