let a = 20;
let b = 40;

var waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)
    }, 2000)
})

waitingData.then((data)=>{
    console.log(a+b+data);
})