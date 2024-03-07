

//let nextClick = null;

//let noDisturb = null;
//let noDisturbBack = null;
async function startInstructions() {
    return new Promise(resolve => {
        document.getElementById("ins1").style.display = "inline";
        setTimeout(function () {
            document.getElementById("ins1").style.display = "none";
            document.getElementById("ins2").style.display = "inline";
        }, 2000);
        setTimeout(function () {
            document.getElementById("next").style.top = "89%"
            document.getElementById("next").style.display = "inline";
        }, 5000);
        document.getElementById("next").onclick = function () {
            document.getElementById("ins2").style.display = "none";
            document.getElementById("next").style.display = "none";
            document.getElementById("ins3").style.display = "inline";
            setTimeout(function () {
                document.getElementById("next").style.top = "87%"
                document.getElementById("next").style.display = "inline";
            }, 5000);
            document.getElementById("next").onclick = function () {
                document.getElementById("ins3").style.display = "none";
                document.getElementById("next").style.display = "none";
                document.getElementById("ins4").style.display = "inline";
                setTimeout(function () {
                    document.getElementById("next").style.display = "inline";
                }, 5000);
                document.getElementById("next").onclick = function () {
                    document.getElementById("ins4").style.display = "none";
                    document.getElementById("next").style.display = "none";
                    document.getElementById("ins5").style.display = "inline";
                    setTimeout(function () {
                        document.getElementById("next").style.display = "inline";
                    }, 5000);
                    document.getElementById("next").onclick = function () {
                        document.getElementById("ins5").style.display = "none";
                        document.getElementById("next").style.display = "none";
                        document.getElementById("ins6").style.display = "inline";
                        setTimeout(function () {
                            document.getElementById("next").style.display = "inline";
                        }, 5000);
                        document.getElementById("next").onclick = function () {
                            document.getElementById("ins6").style.display = "none";
                            document.getElementById("next").style.display = "none";
                            document.getElementById("ins7").style.display = "inline";
                            document.getElementById("doNotDisturb").style.display = "inline";
                            disNext = setTimeout(function () {
                                document.getElementById("next").style.display = "inline";
                            }, 5000);
                            document.getElementById("doNotDisturb").onclick = function () {
                                clearTimeout(disNext);
                                document.getElementById("next").style.display = "none";
                                document.getElementById("doNotDisturb").style.display = "none";
                                document.getElementById("ins7").style.display = "none";
                                document.getElementById("doNotDisturbPage").style.display = "inline";
                                document.getElementById("iphone").style.display = "inline";
                                document.getElementById("notIphone").style.display = "inline";
                                document.getElementById("doNotDisturbGoBack").style.display = "inline";
                                document.getElementById("doNotDisturbGoBack").onclick = function () {
                                    document.getElementById("doNotDisturbPage").style.display = "none";
                                    document.getElementById("iphone").style.display = "none";
                                    document.getElementById("notIphone").style.display = "none";
                                    document.getElementById("doNotDisturbGoBack").style.display = "none";
                                    document.getElementById("ins7").style.display = "inline";
                                    document.getElementById("next").style.display = "inline";
                                }
                            }

                            document.getElementById("next").onclick = function () {
                                document.getElementById("ins7").style.display = "none";
                                document.getElementById("doNotDisturb").style.display = "none";
                                document.getElementById("next").style.display = "none";
                                document.getElementById("ins8").style.display = "inline";
                                setTimeout(function () {
                                    document.getElementById("next").style.display = "inline";
                                }, 5000);
                                document.getElementById("next").onclick = function () {
                                    document.getElementById("ins8").style.display = "none";
                                    document.getElementById("next").style.display = "none";
                                    document.getElementById("ins9").style.display = "inline";
                                    setTimeout(function () {
                                        document.getElementById("next").style.display = "inline";
                                    }, 5000);
                                    document.getElementById("next").onclick = function () {
                                        document.getElementById("ins9").style.display = "none";
                                        document.getElementById("next").style.display = "none";
                                        document.getElementById("ins10").style.display = "inline";
                                        setTimeout(function () {
                                            document.getElementById("next").style.display = "inline";
                                        }, 5000);
                                        document.getElementById("next").onclick = function () {
                                            console.log("done");
                                            document.getElementById("ins10").style.display = "none";
                                            document.getElementById("next").style.display = "none";
                                            // document.getElementById("next").style.display = "none";
                                            // document.getElementById("ins11").style.display = "inline";
                                            // setTimeout(function () {
                                            //     document.getElementById("next").style.display = "inline";
                                            // }, 1000);
                                            // document.getElementById("next").onclick = function () {
                                            //     nextClick = 10;
                                            //     if (nextClick == 10) {
                                            //         document.getElementById("ins11").style.display = "none";
                                            //         document.getElementById("next").style.display = "none";
                                            resolve("done")

                                            //     };

                                            //   };



                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}

