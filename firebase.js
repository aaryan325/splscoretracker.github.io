number = 0;
wicket = 0;

for(n=0; n<=6; n++) {
    console.log("button was clicked");
    console.log(n);
}

function run0() {
    number += 0;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function minus5runs() {
    number -= 5;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function Wicket() {
    wicket += 1;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("totalRuns").innerHTML = "Total Runs = " + number + "/" + wicket;
    if(wicket == 10) {
        alert("Match Over")
    }
}

function run1() {
    number += 1;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function run2 () {
    number += 2;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function run3 () {
    number += 3;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function run4 () {
    number += 4;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function run5 () {
    number += 5;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function run6 () {
    number += 6;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ", ";
}

function run7 () {
    number += 7;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function run8 () {
    number += 8;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function run12 () {
    number += 12;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function Wide () {
    number += 1;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("extras").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function reset() {
    document.getElementById("totalRuns").innerHTML = "Total Runs = ";
    document.getElementById("over").innerHTML = "Overs = ";
    document.getElementById("extras").innerHTML = "Extras = ";
    document.getElementById("wickets").innerHTML = "Wickets = ";
    document.getElementById("runsonballs").innerHTML = "R/per b= ,";
}

function Erase() {
    var substring = document.getElementById("runsonballs").innerHTML;
    var substringofsubstring = substring.substring(0, substring.length-5);
    var minustotalruns = substring.substring(substring.length - 5, substring.length - 0)
    var replacedminustotalruns = minustotalruns.replace(/s/g, "");
    var morereplacedstring = replacedminustotalruns.replace("=", "")
    var evenreplacedminustotalruns = morereplacedstring.replace(/,/g, "");
    if(evenreplacedminustotalruns.includes("1") == true) {
        number -= 1;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("2") == true) {
        number -= 2;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("3") == true) {
        number -= 3;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("4") == true) {
        number -= 4;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("6") == true) {
        number -= 6;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("8") == true) {
        number -= 8;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("12") == true) {
        number -= 9;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("14") == true) {
        number -= 9;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("No") == true) {
        number -= 1;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("👉") == true) {
        number -= 1;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("N1") == true) {
        number -= 1;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("N2") == true) {
        number -= 1;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("N3") == true) {
        number -= 1;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("N4") == true) {
        number -= 1;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("N6") == true) {
        number -= 1;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("N8") == true) {
        number -= 2;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    if(evenreplacedminustotalruns.includes("-5") == true) {
        number += 5;
        document.getElementById("totalRuns").innerHTML = "total runs = " + number;
    }
    console.log(evenreplacedminustotalruns);
    document.getElementById("runsonballs").innerHTML = substringofsubstring;
}

function Noball() {
    number += 1;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("extras").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

if(document. getElementById('0').clicked == true)
{
alert("button was clicked");
}

function overs() {
    var substring = document.getElementById("runsonballs").innerHTML;
    var newstring = substring.slice(8);
    var replacedstring = newstring.replace(/\s/g, '');
    var morereplacedstring = replacedstring.replace(/,👈👉/g, "")
    var evenmorereplacedstring = morereplacedstring.replace(/,No/g, "");
    var evenevenmorereplacedstring = evenmorereplacedstring.replace(/,N1/g, "");
    var evenevenevenmorereplacedstring = evenevenmorereplacedstring.replace(/,N2/g, "");
    var evenmorereplacedstring3 = evenevenevenmorereplacedstring.replace(/,N3/g, "");
    var evenmorereplacedstring4 = evenmorereplacedstring3.replace(/,N4/g, "")
    var evenmorereplacedstring5 = evenmorereplacedstring4.replace(/,N6/g, "");
    var evenmorereplacedstring6 = evenmorereplacedstring5.replace(/,N8/g, "");
    var evenmorereplacedstring7 = evenmorereplacedstring6.replace(/,14/g, "");
    var numberofcommas = (evenmorereplacedstring7.match(/,/g)||[]).length - 1;
    if(numberofcommas == 0) {
        numberofcommas = 0.0;
    }
    if(numberofcommas == 1) {
        numberofcommas = 0.1
    }
    if(numberofcommas == 2) {
        numberofcommas = 0.2
    }
    if(numberofcommas == 3) {
        numberofcommas = 0.3
    }
    if(numberofcommas == 4) {
        numberofcommas = 0.4
    }
    if(numberofcommas == 5) {
        numberofcommas = 0.5
    }
    if(numberofcommas == 6) {
        numberofcommas = 1.0
    }
    if(numberofcommas == 7) {
        numberofcommas = 1.1
    }
    if(numberofcommas == 8) {
        numberofcommas = 1.2
    }
    if(numberofcommas == 9) {
        numberofcommas = 1.3
    }
    if(numberofcommas == 10) {
        numberofcommas = 1.4
    }
    if(numberofcommas == 11) {
        numberofcommas = 1.5
    }
    if(numberofcommas == 12) {
        numberofcommas = 2.0
    }
    if(numberofcommas == 13) {
        numberofcommas = 2.1
    }
    if(numberofcommas == 14) {
        numberofcommas = 2.2
    }
    if(numberofcommas == 15) {
        numberofcommas = 2.3
    }
    if(numberofcommas == 16) {
        numberofcommas = 2.4
    }
    if(numberofcommas == 17) {
        numberofcommas = 2.5
    }
    if(numberofcommas == 18) {
        numberofcommas = 3.0
    }
    if(numberofcommas == 19) {
        numberofcommas = 3.1
    }
    if(numberofcommas == 20) {
        numberofcommas = 3.2
    }
    if(numberofcommas == 21) {
        numberofcommas = 3.3
    }
    if(numberofcommas == 22) {
        numberofcommas = 3.4
    }
    if(numberofcommas == 23) {
        numberofcommas = 3.5
    }
    if(numberofcommas == 24) {
        numberofcommas = 4.0
    }
    if(numberofcommas == 25) {
        numberofcommas = 4.1
    }
    if(numberofcommas == 26) {
        numberofcommas = 4.2
    }
    if(numberofcommas == 27) {
        numberofcommas = 4.3;
    }
    if(numberofcommas == 28) {
        numberofcommas = 4.4;
    }
    if(numberofcommas == 29) {
        numberofcommas = 4.5;
    }
    if(numberofcommas == 30) {
        numberofcommas = 5.0;
    }
    if(numberofcommas == 31) {
        numberofcommas = 5.1;
    }
    if(numberofcommas == 32) {
        numberofcommas = 5.2;
    }
    if(numberofcommas == 33) {
        numberofcommas = 5.3;
    }
    if(numberofcommas == 34) {
        numberofcommas = 5.4;
    }
    if(numberofcommas == 35) {
        numberofcommas = 5.5;
    }
    if(numberofcommas == 36) {
        numberofcommas = 6.0;
    }
    document.getElementById("over").innerHTML = "Overs= " + numberofcommas;
}

function storeData() {
    let totalRuns = document.getElementById("totalRuns").innerHTML;
    let slicedRuns = totalRuns.slice(12);
    let runsonballs = document.getElementById("runsonballs").innerHTML;
    let overs = document.getElementById("over").innerHTML;
    let slicedovers = overs.slice(6);
    let wickets = document.getElementById("wickets").innerHTML;
    let slicedwickets = overs.slice(8);
    let teamA = document.getElementById("input").value;
    let teamB = document.getElementById("input1").value;
    let inning = document.getElementById("input2").value;
    let extras = document.getElementById("extras").innerHTML;

    var data = {
        extras: extras,
        inning: inning,
        teamA: teamA,
        teamB: teamB,
        runs: slicedRuns,
        runsonballs: runsonballs,
        overs: slicedovers,
        wickets: slicedwickets,
    }

    //save thwe data to firebase
    var database = firebase.database();

    var ref = database.ref("Match records");

    ref.push(data);
}

function Noball1() {
    number += 2;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("extras").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function Noball2() {
    number += 3;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("extras").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function Noball3() {
    number += 4;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("extras").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function Noball4() {
    number += 5;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("extras").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function Noball6() {
    number += 7;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("extras").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function Noball8() {
    number += 10;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("extras").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}

function Noball12() {
    number += 14;
    document.getElementById("totalRuns").innerHTML = "total runs = " + number+ "/" + wicket;
    document.getElementById("runsonballs").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
    document.getElementById("extras").innerHTML += document.getElementById(event.srcElement.id).innerHTML + ",  ";
}