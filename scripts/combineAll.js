const fyi = document.querySelector('#fyi');
fyi.addEventListener('click', () => {
    alert(prompt().substring(0, 3) === "555" ? '1' : '0');
});

const bball = document.querySelector('#bball');
bball.addEventListener('click', () => {
    let scores = prompt();
    let a = 0;
    let b = 0;
    let n = scores.length;
    let i = 0;
    while(i < n) {
        if(scores[i] == 'A') {
            a += parseInt(scores[i + 1]);
        }
        if(scores[i] == 'B') {
            b += parseInt(scores[i + 1]);
        }
        i++;
    }

    if(a > b) {
        alert('A');
    }
    else if(b > a) {
        alert('B');
    }
});

const atob = document.querySelector('#atob');
atob.addEventListener('click', () => {
    let nums = prompt();
    // split needs a separator otherwise it creates an array with the whole input
    nums = nums.split(' ');

    let a = parseInt(nums[0]);
    let b = parseInt(nums[1]);

    let steps = 0;

    while(a != b) {
        if(a == b) 
            break;
        if(a < b) {
            a++;
            steps++;
        }
        else if(a % 2 == 0) {
            a /= 2;
            steps++;
        }
        else {
            a++;
            steps++;
        }
        console.log(a);
    }

    alert(steps);
});

const speed = document.querySelector('#speed');
speed.addEventListener('click', () => {
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
});
