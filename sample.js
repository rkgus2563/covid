function getCovidData(){
    //여기서 뭔가 시간이 걸리는 작업이 이뤄지는거야(비동기로)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hello World");
        },3000);
    });
}

let data = getCovidData();
data.then(x =>{
    console.log(x);
});
// const data = {
//     name:'정재성',
//     age:40
// }

// function jaesung(a,b){
//     return a + b;
// }

// module.exports.jaesung = function(a,b){
//     return a+b;
// }

// //위랑 밑은 같음.
// //module.exports = 밖으로 내보낼 것들 
// module.exports.jae = jaesung;
// module.exports.data = data;