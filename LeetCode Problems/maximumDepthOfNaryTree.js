// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

var maxDepth = function(root) {
    
  let max = 0;
  
  const checkDepth = (node, level) => {
      let depth = level;
      
      if(!node){
          return 0;
      }
      
      if(node.children.length > 0){
          for(let i=0; i<node.children.length; i++){
              checkDepth(node.children[i], level+1)
          }
      } else{
          if(depth > max){
              max = depth;
          }
          
          return;
      }
  }
  
  checkDepth(root, 1);
  
  return max;
};