/* ---------------------------------------------------------------- */
/* ---------------------------- IMPORTS --------------------------- */
/* ---------------------------------------------------------------- */

import clipboard from "clipboardy";

/* ---------------------------------------------------------------- */
/* -------------------- COMMENT-TITLE FUNCTION -------------------- */
/* ---------------------------------------------------------------- */

function printTitle(titleString, titleLength, titleORsubtitle) {

    // Force Title Lenght to be a even number
    if (titleLength % 2 !== 0) {
        titleLength ++
    }

/* --------------- VARIABLES DECLARATIONS AND SETUP --------------- */

    titleString = titleString.toUpperCase()
    const titleStringLength = titleString.length

    const dashesLength = titleLength - 6  // Adjust the size of the top Dashes 
    const sideDashesLenght = (titleLength - titleStringLength - 8 ) / 2 // Adjust the size of the side Dashes 

    const startEnd = ['/*', '*/'];
    let output;

/* --------------- FUNCTIONS DECLARATIONS AND SETUP --------------- */

/* ------------------------ DASHES BUILDER ------------------------ */

    const buildDashes = (dashesLength) => {
        let dashes = '-';
        for (let i=1; i < dashesLength; i++) { dashes += '-' }; // let 1=i; because .length() starts counting on 1
        return dashes
    }

/* ------------------------- TITLE BUILDER ------------------------ */

    const buildSubtitle = (titleString) => {

        const subtitle = 
            startEnd[0] + ' ' +
            buildDashes(sideDashesLenght) + ' ' +
            titleString + ' ' +
            (titleStringLength % 2 === 0 ? buildDashes(sideDashesLenght) : buildDashes(sideDashesLenght - 1)) + ' ' +
            //Fix for odd length titles with ternaty operator
            startEnd[1] 

        return subtitle
    }

/* ----------------------- SUBTITLE BUILDER ----------------------- */

    const buildTitle = (titleString) => {
        
        const title = 
            startEnd[0] + ' ' + buildDashes(dashesLength) + ' ' + startEnd[1] + '\n' +
            buildSubtitle(titleString) + '\n' +
            startEnd[0] + ' ' + buildDashes(dashesLength) + ' ' + startEnd[1]

        return title
    }

/* ------------------ TITLE / SUBTITLE SELECTION ------------------ */

    if (titleORsubtitle === 'subtitle') {
        output = buildSubtitle(titleString)
        
    } else if (titleORsubtitle === 'title' || titleORsubtitle === undefined) {
        output = buildTitle(titleString)
    }

/* ------------------- COPY TO CLIPBOARD AND LOG ------------------ */

    clipboard.writeSync(output)
    console.log(output);

}

const title = '/* ---------------------------- OUTPUT ---------------------------- */'

// printTitle(title, 70)
// printTitle(title, 70, 'subtitle')

console.log(title.length);