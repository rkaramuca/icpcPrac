////////////////////////////////////////////////////////////////////////////////
// Done                                                                       //
////////////////////////////////////////////////////////////////////////////////

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
