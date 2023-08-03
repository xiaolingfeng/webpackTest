function calc(start,end){
    let sum = 0;
    let step = 0;
    function run(){
        const next = start + step;
        sum += next;
        step++;
        if(next < end){
            run();
        }
    }
    run();
    return sum;
}

function calc1To100(num1,num2){
    let num = num1 + num2;
    if(num2 < 100){
        return calc1To100(num,num2 + 1);
    }
    return num;
}

console.log(calc(1,100));
console.log(calc1To100(1,2));

