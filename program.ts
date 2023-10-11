let imie: string = "Jan"; 
let nazwisko: string = "Kowalski";
let tekst: string = `moje imie to ${imie}, a nazwisko ${nazwisko}`;
console.log(`${imie}, ${nazwisko}, ${tekst}`);

let liczba1:number = 5;
let liczba2:number = 23.4;
let liczba3:number = 5_322_100;
let liczba4:number=0xfff;
console.log(`${liczba1}, ${liczba2}, ${liczba3}, ${liczba4}`);

let costam:boolean;
costam = true;
let cokolwiek:any;
cokolwiek = 5;
cokolwiek = "hej";
console.log(`${typeof cokolwiek}`);

let wspolna:number|string|boolean;
wspolna=22;
wspolna="dsds";
wspolna=true;
console.log(`${typeof wspolna}`);