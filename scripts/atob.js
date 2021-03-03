////////////////////////////////////////////////////////////////////////////////
// Done                                                                       //
////////////////////////////////////////////////////////////////////////////////

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
