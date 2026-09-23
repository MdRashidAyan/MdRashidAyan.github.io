/* =========================================================
   ASTRONIUS — CODE LAB
   Interactive Terminal
========================================================= */

const output = document.getElementById("terminalOutput");
const button = document.getElementById("launchBtn");


/* =========================================================
   DEMO OUTPUT
========================================================= */

const simulationLines = [

    "> ASTRONIUS CODE LAB",

    "> --------------------------------",

    "> Initializing mission systems...",

    "> Loading C++ orbit engine...",

    "> C++: Calculating orbital velocity...",

    "> C++: Orbital velocity = 7.55 km/s",

    ">",

    "> Loading Java mission module...",

    "> Java: Calculating mission time...",

    "> Java: Mission day = 15",

    ">",

    "> Starting Node.js mission API...",

    "> Node.js: ARES-1 API ONLINE",

    "> Destination: Mars",

    "> Status: ACTIVE",

    ">",

    "> Connecting PHP space database...",

    "> PHP: LUNA-7 data received",

    "> Destination: Moon",

    "> Crew: 4",

    ">",

    "> Running final systems check...",

    ">",

    "> ORBIT SYSTEM     [ONLINE]",

    "> MISSION SYSTEM   [ONLINE]",

    "> NODE API         [ONLINE]",

    "> PHP API          [ONLINE]",

    ">",

    "> --------------------------------",

    "> SIMULATION COMPLETE ✓"

];


/* =========================================================
   TYPE ONE LINE
========================================================= */

function typeLine(text, index) {

    return new Promise(function(resolve) {

        setTimeout(function() {

            const line = document.createElement("p");

            line.textContent = text;

            if (
                text.includes("COMPLETE") ||
                text.includes("[ONLINE]")
            ) {

                line.classList.add("success");

            }

            output.appendChild(line);

            resolve();

        }, index * 180);

    });

}


/* =========================================================
   RUN SIMULATION
========================================================= */

async function runSimulation() {

    /* Clear old terminal */

    output.innerHTML = "";


    /* Disable button */

    button.disabled = true;

    button.textContent = "SIMULATION RUNNING...";


    /* Add each line */

    for (
        let i = 0;
        i < simulationLines.length;
        i++
    ) {

        await typeLine(
            simulationLines[i],
            i
        );

    }


    /* Enable button again */

    button.disabled = false;

    button.textContent = "RUN DEMO SIMULATION";

}


/* =========================================================
   BUTTON EVENT
========================================================= */

button.addEventListener(
    "click",
    runSimulation
);


/* =========================================================
   STARTUP EFFECT
========================================================= */

window.addEventListener(
    "load",
    function() {

        setTimeout(function() {

            const startup = document.createElement("p");

            startup.textContent =
                "> ASTRONIUS CODE LAB READY ✓";

            startup.classList.add("success");

            output.appendChild(startup);

        }, 500);

    }
);