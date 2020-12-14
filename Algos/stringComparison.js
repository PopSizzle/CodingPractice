function numSourPatch(s, c) {

    let dict = {};
    let count = 0; 
  
    for(let i=0; i<s.length; i++){
      dict[s[i]] = true;
    }
  
    for(let i=0; i<c.length; i++){
      if(dict[c[i]]){
        count ++;
      }
    }
  
    return count;