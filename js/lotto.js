const btn = document.getElementById("lottoBtn")

console.log(btn)

console.log("Lotto.............")

btn.addEventListener("click",(e)=>{
    const arr = []
    for (let i = 0; i < 6; i++) {
        let ranNum = (Math.random()*45+1).toFixed(0)
        if (-1<arr.indexOf(ranNum)){
            i--
            continue
        }arr.push(ranNum)
    }
    console.log(arr)
})
