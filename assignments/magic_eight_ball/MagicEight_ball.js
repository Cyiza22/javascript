function MagicEightBall(){
    let userName = "";
    userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
    const userQuestion = "game?";
    console.log(userQuestion);
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = "";
    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
        default:
            eightBall = 'Invalid input. Please enter a number between 0 and 7.';
    }
    console.log(eightBall);

    // let randomNumber = Math.floor(Math.random() * 8);
    // let eightBall = "";

    // if (randomNumber === 0) {
    //     eightBall = 'It is certain';
    // } else if (randomNumber === 1) {
    //     eightBall = 'It is decidedly so';
    // } else if (randomNumber === 2) {
    //     eightBall = 'Reply hazy try again';
    // } else if (randomNumber === 3) {
    //     eightBall = 'Cannot predict now';
    // } else if (randomNumber === 4) {
    //     eightBall = 'Do not count on it';
    // } else if (randomNumber === 5) {
    //     eightBall = 'My sources say no';
    // } else if (randomNumber === 6) {
    //     eightBall = 'Outlook not so good';
    // } else if (randomNumber === 7) {
    //     eightBall = 'Signs point to yes';
    // } else {
    //     eightBall = 'Invalid input. Please enter a number between 0 and 7.';
    // }

    // console.log(eightBall);

}
MagicEightBall()