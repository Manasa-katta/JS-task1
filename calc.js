function add() {
    let a = eval(document.getElementById("n1").value)
    let b = eval(document.getElementById("n2").value)
    let result = a + b
    document.getElementById("result").innerHTML = result
}
function sub() {
    let a = eval(document.getElementById("n1").value)
    let b = eval(document.getElementById("n2").value)
    let result = a - b
    document.getElementById("result").innerHTML = result
}
function mul() {
    let a = eval(document.getElementById("n1").value)
    let b = eval(document.getElementById("n2").value)
    let result = a * b
    document.getElementById("result").innerHTML = result
}
function div() {
    let a = eval(document.getElementById("n1").value)
    let b = eval(document.getElementById("n2").value)
    let result = a / b
    document.getElementById("result").innerHTML = result
}
function mod() {
    let a = eval(document.getElementById("n1").value)
    let b = eval(document.getElementById("n2").value)
    let result = a % b
    document.getElementById("result").innerHTML = result
}