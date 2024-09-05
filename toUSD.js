function usd() {
    let n = eval(document.getElementById("n1").value)
    let inUSD = n/83.98
    document.getElementById("result").innerHTML = inUSD
}