// You are given the array paths, where paths[i] = [cityAi, cityBi] 
// means there exists a direct path going from cityAi to cityBi. 
// Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, 
// there will be exactly one destination city.

const destCity = function(paths) {
    let first = [];
    let second = [];
    
    for(let i=0; i<paths.length; i++){
        first.push(paths[i][0]);
        second.push(paths[i][1]);
    }
    
    let index = 0;
    let city = paths[0][1];
    
    while(index > -1){
        city = paths[index][1];
        index = first.indexOf(city);
    }
    
    return city;
};