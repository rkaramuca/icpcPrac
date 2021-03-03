////////////////////////////////////////////////////////////////////////////////
// Done                                                                       //
////////////////////////////////////////////////////////////////////////////////


let speeds = [];
let miles = [];
let runs = prompt();

for(let i = 0; i < parseInt(runs); i++) {
    // case is a reserved word
    let curr = prompt();
    curr = curr.split(' ');
    speeds.push(parseInt(curr[0]));
    miles.push(parseInt(curr[1]));
} 

let integralSpeed = 0;

for(let i = 0; i < speeds.length; i++) {
    if(i <= speeds.length - 2) {
        let sDiff = speeds[i + 1] - speeds[i];
        let mDiff = miles[i + 1] - miles[i];
        if(mDiff / sDiff > integralSpeed)
            integralSpeed = mDiff / sDiff;
    }
}

alert(Math.floor(integralSpeed));
