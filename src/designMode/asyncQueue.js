function action1(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(1)
        },1000)
    })
}

function action2(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(2)
        },1000)
    })
}

function action3(){
    return new Promise((res)=>{
        document.getElementById('testButton').addEventListener('click',function(){
            res('click')
        })
    })

}

const arr = [action1,action3,action2]

async function run(){
    let cur = 0;
    const max = arr.length - 1;
    while(cur <= max){
        const res = await arr[cur]()
        console.log(res);
        cur++;
    }
}

run();
