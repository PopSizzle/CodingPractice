// Given two binary trees original and cloned and given a reference to a node target in the original tree.

// The cloned tree is a copy of the original tree.

// Return a reference to the same node in the cloned tree.

// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

var getTargetCopy = function(original, cloned, target) {
    
  let correct;
  let path = '';
  
  const traversePath = (route, node) => {
      let currPath = route;
      
      if(node === target){
          correct = currPath;
          return;
      }
      
      if(node.left){
          traversePath(currPath + 'L', node.left);
      }
      
      if(node.right){
          traversePath(currPath + 'R', node.right);
      }
  }
  
  traversePath('', original);
  
  let currNode = cloned;
  
  for(let i=0; i<correct.length; i++){
      if(correct[i] === 'L'){
          currNode = currNode.left;
      } else if(correct[i] === 'R'){
          currNode = currNode.right;
      }
  }
  
  return currNode;
};