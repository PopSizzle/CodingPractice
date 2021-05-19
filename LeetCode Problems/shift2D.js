var shiftGrid = function(grid, k) {
    
  let full = grid[0];

  let res = [];
  
  let len = grid[0].length;
  
  for(let i=1; i<grid.length; i++){
      full = full.concat(grid[i]);
  }

  console.log(full);

  let front = full.slice(full.length-k);

  let back = full.slice(0,full.length-k);

  full = front.concat(back);

  console.log(full);
  
  while(full.length > 0){

    let curr = full.slice(0,len);

    res.push(curr);

    full = full.slice(len);

  }

  return res;

};

let arr = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]];

console.log(shiftGrid(arr,4));

