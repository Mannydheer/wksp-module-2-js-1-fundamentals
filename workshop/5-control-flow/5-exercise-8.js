// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######



for (let i = 0; i < 8; i++) {
let linesum = '#';
    for (let j = 1; j <= i; j++)
    {
        linesum += '#';
        
    }
    console.log(linesum);
}


