function avg() {
    let a = eval(document.getElementById("n1").value)
    let b = eval(document.getElementById("n2").value)
    let c = eval(document.getElementById("n3").value)
    let d = eval(document.getElementById("n4").value)
    let e = eval(document.getElementById("n5").value)
    let f = eval(document.getElementById("n6").value)
    let average = (a+b+c+d+e+f)/6
    document.getElementById("result").innerHTML = average
}