/*

const btn = document.getElementById("lottoBtn")

btn.addEventListener("click",function (e){

    const target = document.getElementById("resultDiv")

    const balls = makeLottoNum() //리턴 담은거
    target.innerHTML=''
    /!*target.innerText=''*!/
    let str =""
    for (const num of balls) {

        str += `<h3>${[num]}</h3>`

        /!*const tag = document.createElement("h3")
        const textNode = document.createTextNode(balls[i])
        tag.append(textNode)
        target.appendChild(tag)*!/
    }
    target.innerHTML=str
}, false)

*/

function makeLottoNum(){
    const arr = []
    for (let i = 0; i < 6; i++) {
        let ranNum = (Math.random()*450+1).toFixed(0)
        if (-1<arr.indexOf(ranNum)){
            i--
            continue
        }arr.push(ranNum)
    }
    arr.sort(function (a,b){
        return a-b
    })


    return arr




}

