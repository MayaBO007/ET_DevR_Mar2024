
// ****************************************************************************************
//  Listen to Orientation changes and handle them accordingly
// ----------------------------------------------------------------------------------------
// initialize variables:
var screenOrientationEvents = [];

if (window.matchMedia("(orientation: landscape)").matches) {
    removeOnlyLandscapeMessage()
} else {
    showOnlyLandscapeMessage()
}
if (screen.orientation) {
    screen.orientation.addEventListener("change", function () {
        // if ortation is changed from the main landscape mode
        if (window.orientation == 0) { // originally I used this: event.target.screen.orientation.angle - but this does not work on iphones
            showOnlyLandscapeMessage()
        } else { // device rotated back to the main landscape mode
            removeOnlyLandscapeMessage()
        }
        // record data:
        // screenOrientationEvents.push({
        //     orientationAngle: window.orientation,
        //     orientationTime: new Date(),
        //     OrientationTimeStamp: event.timeStamp,
        // });
    });
} else {
    (window.addEventListener("orientationchange", function () {
        if (window.orientation == 0) { // originally I used this: event.target.screen.orientation.angle - but this does not work on iphones
            showOnlyLandscapeMessage()
        } else { // device rotated back to the main landscape mode
            removeOnlyLandscapeMessage()
        }
    }))
}


function showOnlyLandscapeMessage() {
    // check if instructions are done and show message
    if (!studySessionData.doneInstructions == "doneInstructions") {
        return
    } else {
        document.getElementById("horizontal").style.display = "inline"; // The commented parts around were relevant when instructions where not in an iframe
    }
}

function removeOnlyLandscapeMessage() {
    // check if instructions are done and show message
    if (!studySessionData.doneInstructions == "doneInstructions") {
        return
    } else {
        document.getElementById("horizontal").style.display = "none";
    }
}
function fiveAMOrient() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById("fiveAM").style.display = "inline";
    } else {
        document.getElementById("fiveAM_hor").style.display = "inline";
    }
    if (screen.orientation) {
        screen.orientation.addEventListener("change", function () {
            if (screen.orientation.type.startsWith("portrait")) {
                document.getElementById("fiveAM_hor").style.display = "inline";
                document.getElementById("fiveAM").style.display = "none";
            } else {
                document.getElementById("fiveAM_hor").style.display = "none";
                document.getElementById("fiveAM").style.display = "inline";
            }
        })
    } else {
        window.addEventListener("orientationchange", function () {
            if (window.orientation == 0) {
                document.getElementById("horizontal").style.display = "none";
                document.getElementById("fiveAM_hor").style.display = "inline";
                document.getElementById("fiveAM").style.display = "none";
            } else {
                document.getElementById("fiveAM_hor").style.display = "none";
                document.getElementById("fiveAM").style.display = "inline";
            }
        })
    }
}
function problemOrient() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById("problem").style.display = "inline";
    } else {
        document.getElementById("problem_hor").style.display = "inline";
    }
    if (screen.orientation) {
        screen.orientation.addEventListener("change", function () {
            if (screen.orientation.type.startsWith("portrait")) {
                document.getElementById("problem_hor").style.display = "inline";
                document.getElementById("problem").style.display = "none";
            } else {
                document.getElementById("problem_hor").style.display = "none";
                document.getElementById("problem").style.display = "inline";
            }
        })
    } else {
        window.addEventListener("orientationchange", function () {
            if (window.orientation == 0) {
                document.getElementById("horizontal").style.display = "none";
                document.getElementById("problem_hor").style.display = "inline";
                document.getElementById("problem").style.display = "none";
            } else {
                document.getElementById("problem_hor").style.display = "none";
                document.getElementById("problem").style.display = "inline";
            }
        })
    }
}

function endGameOrient() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById("endOfGame").style.display = "inline";
    } else {
        document.getElementById("endOfGame_hor").style.display = "inline";
    }
    if (screen.orientation) {
        screen.orientation.addEventListener("change", function () {
            if (screen.orientation.type.startsWith("portrait")) {
                document.getElementById("endOfGame_hor").style.display = "inline";
                document.getElementById("endOfGame").style.display = "none";
            } else {
                document.getElementById("endOfGame_hor").style.display = "none";
                document.getElementById("endOfGame").style.display = "inline";
            }
        })
    } else {
        window.addEventListener("orientationchange", function () {
            if (window.orientation == 0) {
                document.getElementById("horizontal").style.display = "none";
                document.getElementById("endOfGame_hor").style.display = "inline";
                document.getElementById("endOfGame").style.display = "none";
            } else {
                document.getElementById("endOfGame_hor").style.display = "none";
                document.getElementById("endOfGame").style.display = "inline";
            }
        })
    }
}