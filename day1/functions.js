let language = ""
let country= ''
let greeting = ""
if(country=="korea"){
    language = "Korean"
    greeting = "anioaseyo"
}else if(country=='France'){
    language= 'french'
    greeting = "salut"
}else if(country=='Tanzania'){
    language= 'Swahili'
    greeting = "Mambo"
}else{
    language='Kinyarwanda'
    greeting = "Muraho"
}
country="korea"
console.log("the spoken language in "+ country+ " is " + language +" :"+ greeting )