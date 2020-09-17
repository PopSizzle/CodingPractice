// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

var judgeCircle = function(moves) {
    let x=0;
    let y=0;
    
    for(let i=0; i<moves.length; i++){
        if(moves[i] === 'U'){
            y++;
        } else if(moves[i] === 'D'){
            y--;
        } else if(moves[i] === 'L'){
            x--;
        }else if(moves[i] === 'R'){
            x++;
        }
    }
    if(x === 0 && y === 0){
        return true;
    } else{
        return false;
    }
};