// move to main function
function timeline() {
    platform.getAllSessions().then((data) => {
        getIndexSessionData(data).then((indexI) => {
            studySessionData = data[indexI];
            deleteFromSessionData();
            let updatedDates = updateDates();
            if (updatedDates.fullDate.getDate() == updatedDates.lastGame.getDate()) { //|| lastGamePlusOne.getDate() - fullDate.getDate() > 25 ) {
                fiveAMOrient();
                setTimeout(() => {
                    moveToDay();
                }, timeToFive());
            }
            else if ((updatedDates.fullDate.getDate() == updatedDates.lastGamePlusOne.getDate()) || (updatedDates.yesterday.getDate() == updatedDates.lastGamePlusOne.getDate())
                || (updatedDates.yesterday.getDate() == updatedDates.lastGamePlusTwo.getDate())) {
                if (updatedDates.fullDate.getDate() != updatedDates.lastGamePlusOne.getDate()) {
                    getIndexMissedDays(data).then((indexM) => {
                        if (!indexM) {
                            if (updatedDates.yesterday.getDate() == updatedDates.lastGamePlusTwo.getDate()) {
                                daysMissedNum.push(2);
                            } else {
                                daysMissedNum.push(1);
                            }
                            platform.saveSession(daysMissed);
                            studySessionData.expDaysDate = updatedDates.lastGamePlusOne;
                            platform.saveSession(studySessionData, true);
                        } else {
                            missed = data[indexM]
                            if ((missed.daysMissedNum <= 1) && (updatedDates.yesterday.getDate() == updatedDates.lastGamePlusOne.getDate())) {
                                daysMissedNum.push(2);
                                platform.saveSession(daysMissed);
                            }
                            else {
                                daysMissedNum.push(2);
                                platform.saveSession(daysMissed);
                                endGameOrient();
                            }
                        }
                    })
                }

                if (0 <= updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
                    fiveAMOrient();
                    setTimeout(() => {
                        moveToDay();
                    }, timeToFiveSameDay());
                } else {
                    let startTwoTests = async function () {
                        let doneTest1 = await start2tests(); // add promise and resolve
                        if (doneTest1 == "done") {
                            studySessionData.doneTest1 = 'doneTest1';
                            let updatedDates = updateDates();
                            studySessionData.expDaysDate = updatedDates.fullDate;
                            platform.saveSession(studySessionData, true).then(() => {
                                document.getElementById("endDayMsg").style.display = "inline";
                                document.getElementById("endDayMsg").addEventListener("click", function () {
                                    showWinnings()
                                    clearInterval(sessionIntervalButtons);
                                    setTimeout(() => {
                                        fiveAMOrient();
                                        hideWinnings();
                                    }, 10000)
                                    setTimeout(() => {
                                        moveToDay();
                                    }, timeToFive())
                                })
                            }).catch(() => {
                                if (saveAttemptTraining >= 2000) {
                                    document.getElementById("problem").style.display = "inline";
                                } else {
                                    saveAttemptTraining++;
                                    savingTraining()
                                }
                            })
                        }

                    }
                    startTwoTests()
                }
            } else {
                endGameOrient();
            }
        })
    })
}
