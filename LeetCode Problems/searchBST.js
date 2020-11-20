// Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

var searchBST = function(root, val) {
    
  let target = null
  
  const traverse = (node) => {
      
      
      if(node.val === val){
          target = node;
          return
      } else{
          if(node.left){
              traverse(node.left)
          }
          
          if(node.right){
              traverse(node.right)
          }
      }

  }
  
  traverse(root);
      
  return target;
};