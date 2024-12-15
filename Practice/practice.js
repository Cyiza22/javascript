function bmi(){
    let w = prompt("input your weight in kg: ")
    let h = prompt("input height in m: " )
    let result = w/ (h*h)
    return result
}
console.log(bmi())