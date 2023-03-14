function demo() {
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("img-name");
    let fileName: string = input.value;

    let imgA: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-1");
    imgA.src = './img/' + fileName;

    let imgB: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-2");
    imgB.src = './img/' + fileName;


}


function roll() {
    const max: number = 6;
    const min: number = 1;

    let a: number = Math.floor(Math.random() * (max - min +1)) + min;
    
    let imgA: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-1");
    imgA.src = './img/dice' + a + '.png';
      
    let b: number = Math.floor(Math.random() * (max - min +1)) + min;
    
    let imgB: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-2");
    imgB.src = './img/dice' + b + '.png';

}


