// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

// Return the number of negative numbers in grid.

var countNegatives = function(grid) {
    let count = 0;
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] < 0){
                count += grid[i].length - j;
                break;
            }
        }
    }
    
    return count;
};