let obj = {
    a:[1,2,3]
}

function changeA(obj){
    console.log('inside',obj)
    obj = {
        a:[2,3,4]
    };
}

changeA(obj);
console.log(obj);
