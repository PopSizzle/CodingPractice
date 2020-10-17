// Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

var increasingBST = function(root) {
  let vals = [];
  
  const getVals = (node) => {
      vals.push(node.val);
      
      if(node.right){
          getVals(node.right);
      }
      
      if(node.left){
          getVals(node.left);
      }
  }
  
  getVals(root);
  
  vals.sort(function(a,b){return a-b});
  
  let root2 = new TreeNode(vals[0]);
  let index = 1;
  
  const insert = (node) => {
      if(vals[index]){
          node.right = new TreeNode(vals[index]);
          index ++;
          insert(node.right);
      }
  }
  
  insert(root2);
  
  return root2;
};