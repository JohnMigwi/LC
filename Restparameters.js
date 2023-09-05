const rest = (...args) => {
    let total = 0;
    for(let i=0; i<args.length; i++){
        total += args[i];
    }
    return total;
}

console.log(rest(1,2,3,20,89));