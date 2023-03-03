/*const soyunArray= [{name: "Ronny"},{ name:"Rodz"}, {name:"Saint"}, {name:"Adiel"}]


const newArray= soyunArray.map(item => item.name)

console.log(newArray)*/

/*function calcAge(age) {
    
    return (
       age*=365
        
        )
}
//calcAge(365)
function hola(){

    const holis=calcAge(65)
    console.log(holis)
}
hola()*/

/*function cubes(a) {
	return a ** 3
}
console.log(cubes(3))*/

/*const num1 =(1|0)
console.log(num1)*/


/*function suma(a,b){
 const suma= a*2 + b*2
 return suma 
}

console.log(suma(2,3))*/


/*function giveMeSomething(a) {
	const saludo = "something"
	const saludo1 =a+" "+saludo
	return saludo1
}
 console.log(giveMeSomething("joe"))*/
 /*function lessThanOrEqualToZero(num) {
	if (num >=0) {
		return false
	}
	else return true
}

console.log(lessThanOrEqualToZero(-5))*/

/*function canNest(arr1, arr2) {

    if (Math.min(...arr1)>Math.min(...arr2)){
        return true 
    }
    else return false
}

console.log(canNest([1, 2, 3, 4], [0, 6])) */

/*function minMax(arr) {
   
    return [Math.min(...arr),value2=Math.max(...arr)]
}
 console.log(minMax([1,2,3,-8,4,11,8]))*/

 /*function matchHouses(step) {
    if (step<2){
        return step*6 
    }
    if (step>1){ 
        return step*5+1
    }
 }
 console.log(matchHouses(4))*/

 
/*class MiClase {
    constructor() {
      // constructor de la clase
    }
    
    miMetodo(param1, param2) {
      this.param1*=2
      this.param2*=2
  
  }
  }
  
  const miObjeto = new MiClase(); // Creamos una instancia de la clase
  
  miObjeto.miMetodo = function(param1, param2) {
      
  }
  
  miObjeto.miMetodo(2, 3); */


 /* function area (diametro,altura){


    diametro *= 2
    altura *=2
    sumaDiametro= diametro+ altura
    console.log(sumaDiametro)
    return sumaDiametro

  }

area(3,5)*/


/*
const soyunArray= [[1,2],[2,3]]
const soyunArray2= [[1,2],[2,3]]

function suma(Array1,Array2){

    const result = []
    for (let i = 0; i < Array1.length; i++) {
        result.push([])

        for (let j = 0; j < Array1[i].length; j++) {
    
            result[i][j]= Array1[i][j]+Array2[i][j]

        }
    }
    return result
}


const resultado =suma(soyunArray,soyunArray2)
console.log(resultado)*/
const tabla1= [[2,2],[3,3]]

class myclass2{

    sumaMatrixId(num1){
       const valuesArray= num1
      for (let i = 0; i < num1.length; i++) {
        const element = num1[i]+1;
        
      }
      return  valuesArray
    }


}
const hola= new myclass2
const suma1=hola.sumaMatrixId(tabla1)

console.log(suma1)
