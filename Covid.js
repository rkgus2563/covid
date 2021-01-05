const cheerio = require('cheerio');
const { resolve } = require('path');
const request = require('request');

String.prototype.toNumber = function(){
    return parseInt(this.split("").filter(x => x != " " && x != ",").join(""));
}

function getCovidData(){
    const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";

    return new Promise( (resolve, reject)=>{
        request(url, (err, res, body)=>{
            const $ = cheerio.load(body);
            //갓채영 
            let total = $(".ca_value").eq(0).html().toNumber();
            let covid = $(".inner_value").eq(0).html().toNumber();
            let covid_d = $(".inner_value").eq(1).html().toNumber();
            let covid_o = $(".inner_value").eq(2).html().toNumber();
            
            let freeCnt = $(".ca_value").eq(2).html().toNumber();
            let freeCnt_compare = $(".txt_ntc").eq(0).html().toNumber();
    
            let inPrison = $(".ca_value").eq(4).html().toNumber();
            let inPrison_compare = $(".txt_ntc").eq(1).html().toNumber();
    
            let death = $(".ca_value").eq(6).html().toNumber();
            let death_compare = $(".txt_ntc").eq(2).html().toNumber();
    
           let date = $(".t_date").eq(0).html();
           
            resolve({total,covid,covid_d,covid_o,freeCnt,freeCnt_compare,inPrison,inPrison_compare,death,death_compare,date});
        });
    });
}

//getCovidData라는 함수를 내보내기 위해서 써야하는 코드
module.exports.getCovidData = getCovidData;


// let html = `
//     <div class = "abc">adfaafd</div>
//     <div class = "gondr">dfasfa</div>
//     <div class = "cccc">fdafda</div>
// `;

// let $ = cheerio.load(html);

// const msg = $(".gondr").html();

// console.log(msg);

// document =>
// 문서 객체 -> HTML문서를 해석해서 DOM 형태로 트리구조화 시켜놓은것을 담고 있는 객체 
//document

// 노드는 브라우저라는 플랫폼을 벗어나서 
// 컴퓨터 어디든 JS실행시킬 수 있는 환경을 만들어준거.

//자바 gradle == 자바스크립트 npm