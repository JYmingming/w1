
const btn = document.getElementById("lottoBtn")

btn.addEventListener("click",function (e){

    const target = document.getElementById("resultDiv")
    const balls = makeLottoNum() //리턴 담은거

    /*target.innerText=''*/

    for (const i in balls) {

        const tag = document.createElement("h3")
        target.appendChild(tag)
        const textNode = document.createTextNode(balls[i])
        tag.append(textNode)
    }
}, false)


function makeLottoNum(){
    const arr = []
    for (let i = 0; i < 6; i++) {
        let ranNum = (Math.random()*45+1).toFixed(0)
        if (-1<arr.indexOf(ranNum)){
            i--
            continue
        }arr.push(ranNum)
    }return arr
}
