function moveToDay() {
    platform.getAllSessions().then((data) => {
        getIndexSessionData(data).then((indexI) => {
            studySessionData = data[indexI];
            // let updatedDates = updateDates();
            let todayDate = new Date;
            todayDate = todayDate.getDate();

            const moveToAppButton = document.getElementById("moveToAppButton");
            const loading = document.getElementById("loading");


            if ((typeof studySessionData === "undefined" || studySessionData.doneInstructions === "")) {
                if (Number(todayDate) === 19) { //change to exp start date
                    platform.goToUrl("instructions/instructions.html");
                    studySessionData.doneInstructions = "stratIns";
                } else {
                    console.log("start date dosen't match")
                    problemOrient();
                }
            } else if (extractDeviceName(userAgent) == studySessionData.userDevice) {
                if (studySessionData.doneInstructions === "doneInstructions") {
                    if (((todayDate >= "16") || (Number(todayDate) === 16)) && (studySessionData.doneTest1 == "")) { //NO ZEROS IN FRONT OF SINGEL DIGITS
                        platform.goToUrl("days/twoTests/twoTests.html");
                    } else if
                        (
                        studySessionData.isDayDone === "done" &&
                        studySessionData.doneTest1 !== "doneTest1" ||
                        studySessionData.isDayDone !== "done" && (Number(todayDate) === Number(dayDate()) ||
                            Number(todayDate) === (Number(dayDate()) + 1))) {
                        platform.goToUrl("days/training/training.html");
                    } else if (
                        studySessionData.isDayDone !== "done") {
                        problemOrient();
                    } else if ((studySessionData.doneTest1 === "doneTest1") && (studySessionData.doneTest2 != "doneTest2")) {
                        platform.goToUrl("days/devTest/devTest.html");
                    } else if (studySessionData.doneTest2 === "doneTest2") {
                        moveToAppButton.style.display = "none";
                        loading.style.display = "none";
                        endGameOrient()
                    } else {
                        problemOrient();
                    }
                } else {
                    problemOrient();
                }
            } else {
                problemOrient();
            }
        });
    });
}
