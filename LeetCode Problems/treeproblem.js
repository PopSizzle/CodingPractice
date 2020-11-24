function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    }


var levelOrderBottom = function(root) {
    let queue = [];
    let result = [root.value]
    
    const adder = (root) => {
        
        
        if(root.left){
            queue.push(root.left);
            result.push(root.left.value);
        }
        if(root.right){
           queue.push(root.right);
            result.push(root.right.value);
        }
        
        if(queue.length === 0){
            return result;
        } else {
            let temp = queue[0];
            queue.shift();
            adder(temp);
        }
        
    }

};