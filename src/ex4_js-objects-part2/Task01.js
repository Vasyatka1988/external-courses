/**функция, которая принимает имя свойства и объект и ищет данное свойство <br>
 * только в прототипе переданного объекта (объект создан заранее через Object.create()). */
function serchPropInPorototype(propName, obj){
    return obj.hasOwnProperty(propName) ? false : true ;
}

//create prototype
var animals = { 
    tiger: { 
        name: 'Amur', 
        age: 8, 
        status: 'hungry' },
    goal: {    
        name: 'Timur', 
        age: 5, 
        status: 'hungry' } }

//create object
var tiger1 = Object.create(animals.tiger);


//testing
tiger1["color"] = "red";
console.log(serchPropInPorototype("color",tiger1));
console.log(serchPropInPorototype("name",tiger1));
