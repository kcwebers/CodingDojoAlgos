// Given a number, add the collective sum up to that number (using Fibonacci sequence)

// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	
// 0	1	1	2	3	5	8	13	21	34	55	

function recursiveFibonacci(num) {
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
    }
}
