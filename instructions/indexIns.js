
// move to main function
function timeline() {
    let goIns = async function () {
        studySessionData.doneInstructions = "stratIns";
        let doneInstructions = await startFirstDay();
        if (doneInstructions == "doneInstructions") {
            let updatedDates = updateDates();
            studySessionData.doneInstructions = "doneInstructions";
            studySessionData.expDaysDate = updatedDates.fullDate;
            studySessionData.startDate = startDate;
            platform.saveSession(studySessionData, true).then(() => {
                platform.goToUrl("instructions/questions/Multiple-Choice-Quiz-JavaScript-master/index.html");
            });
        }
    }
    goIns();
}


