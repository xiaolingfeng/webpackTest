const obj = {
    a:1,b:2
}

function defineGetter(obj,getter){
    Object.keys(obj).forEach(key=>{
        const val = obj[key]
        Object.defineProperty(obj,key,{
            get(){
                return getter(val)
            }
        })
    })
}

function defineSetter(obj,setter){
    Object.keys(obj).forEach(key=>{
        const val = obj[key]
        Object.defineProperty(obj,key,{
            set(value){
                this[key] = setter(value)
            }
        })
    })
}

defineGetter(obj,function(value){
    return value * 2;
})

defineSetter(obj,function(value){
    return value * 2
})

function test(){
    const a = obj.a;
    const b = obj.b;
    obj.b = 4;
    console.log(a,b)
}

test();
