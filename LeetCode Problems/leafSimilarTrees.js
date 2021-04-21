var leafSimilar = function(root1, root2) {
    
  const traverse = (node, leaves) =>{
      
      if(!node.left && !node.right) leaves.push(node.val);
      
      if(node.left) traverse(node.left,leaves);
      
      if(node.right) traverse(node.right,leaves);
      
      return leaves;
  }
  
  let leaves1 = traverse(root1,[]);
  let leaves2 = traverse(root2,[]);
  
  if(leaves1.length !== leaves2.length) return false;
  
  for(let i=0; i<leaves1.length; i++){
      if(leaves1[i] !== leaves2[i]) return false;
  }
  
  return true;
};