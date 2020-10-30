// You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.

var sumRootToLeaf = function(root) {
    
  const nums = [];
  
  const traverseSum = (num, node) => {
      let str = num + node.val;
      
      if(node.left) {
          traverseSum(str, node.left);
      }
      
      if(node.right){
          traverseSum(str, node.right);
      }
      
      if(!node.right && !node.left){
          nums.push(str);
          return
      }
  }
  
  traverseSum('', root);
  
  const binaryTranslate = (str) => {
      let sum = 0;
      
      for(let i=str.length-1; i>=0; i--){    
      
          if(str[i] === '1'){
              let power = str.length-(i+1);
              sum += Math.pow(2,power);
          }
      }
      
      return sum;
  }
  
  let answer = 0;
  
  for(let i=0; i<nums.length; i++){
      answer += binaryTranslate(nums[i]);
  }
  
  return answer;
};