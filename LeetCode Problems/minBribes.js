function minimumBribes(q) {
    let bribes = 0;

   for (let i = 0; i < q.length; i++) {
       let jumps = 0;

       for (let j = (i + 1); j < q.length; j++) {
           if (q[i] > q[j]) {
               jumps++;
           }
       }
       if (jumps > 2) {
           return console.log("Too chaotic");
       } else if (jumps > 0) {
           bribes += jumps;
       }
   }

   return bribes;
}

arr = [1, 2, 5, 3, 7, 8, 6, 4];
arr1 = [2,1, 5, 3, 4]


console.log(minimumBribes(arr));
console.log(minimumBribes(arr1));