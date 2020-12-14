function backToSquareOne(moves) {

        let position = [0,0];
  
        for(let i=0; i<moves.length; i++){
          switch(moves[i]){
            case 'U':
              position[0]++;
              break;
            case 'D':
              position[0]--;
              break;
            case 'L':
              position[1]--;
              break;
            case 'R':
              position[1]++;
              break;
            default:
              return 'Invalid Move';
          }
        }
  
        console.log(position);
  
        if(position[0] === 0 && position[1] === 0){
          return true;
        }
  
        return false;
}