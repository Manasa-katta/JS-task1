function square() {
    let a = document.getElementById("n1").value
    let b = document.getElementById("n2").value
    let result = (a*a + b*b + 2*a*b)
    document.getElementById("result").innerHTML = result
}