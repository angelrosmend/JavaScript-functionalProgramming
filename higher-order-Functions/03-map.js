const animals = [
    {name: 'Ash', species: 'rabbit'},
    {name: 'Wolfgang', species: 'dog'},
    {name: 'Layla', species: 'cat'},
    {name: 'Alucard', species: 'dog'},
    {name: 'Poe', species: 'raven'},
    {name: 'Bowie', species: 'cat'},
    {name: 'Morena', species: 'cat'},
    {name: 'Triton', species: 'fish'}
]


var names = animals.map(function(animal){
    return animal.name + ' is a ' + animal.species
})

let names2 = animals.map(animal => animal.name)

console.log(names2)

{/*function getNames(arr) {
    var names = []
    for(var i = 0; i < arr.length; i++){
        names.push(arr[i].name)
    }
    return names
}

console.log(getNames(animals))*/}

