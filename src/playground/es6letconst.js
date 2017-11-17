var nameVar = 'Benoit';
var nameVar = 'Mike';

console.log('nameVar',nameVar)

let nameLet= 'Benoit';
nameLet='Jenny';
console.log('nameLet', nameLet);

const nameConst ='Agata';
console.log('nameConst', nameConst);

const multiplier ={
    numbers: [2,3,4,6],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number)=>number*this.multiplyBy)
    }
};

console.log(multiplier.multiply())