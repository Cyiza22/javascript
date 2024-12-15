function fromToKelvin(){
    const kelvin = 0;
    // initial value of kelvin()
    const celsius = kelvin - 273;
    // the value of celcius initialized
    let fahrenheit = celsius * (9 / 5) + 32;
    // the initial value of fahrenheit
    fahrenheit = Math.floor(fahrenheit);
    // this prevents the fahrenheit value to become a decimal
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

    // Convert to Newton
    let newton = celsius * (33 / 100);
    // Round down
    newton = Math.floor(newton);
    console.log(`The temperature is ${newton} degrees Newton.`);

}
fromToKelvin()