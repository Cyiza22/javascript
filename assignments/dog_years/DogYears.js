function dogYrs(){
    const myAge = 8;
    // initializing human age
    let earlyYears = 2;
    // this defines early years
    earlyYears *= 10.5;
    let laterYears= myAge - 2;
    laterYears *= 4;
    let myAgeInDogYears = earlyYears + laterYears;
    // this is the total years
    const myName = "Henriette".toLocaleLowerCase() ;
    // this is my name

    console.log(earlyYears +" and "+ laterYears)
    console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
    // this prints out my name human age and dog age
}
dogYrs()