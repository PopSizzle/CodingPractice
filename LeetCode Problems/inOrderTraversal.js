
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function(root) {
    
  if(!root) return [];
  
  const traverse = (node,array) =>{
      
      if(node.left) array = array.concat(traverse(node.left,[]));
      
      array.push(node.val);
      
      if(node.right) array = array.concat(traverse(node.right,[]));
      
      return array;
  }
  
  return traverse(root,[]);
  
};