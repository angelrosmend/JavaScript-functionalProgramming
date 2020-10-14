const animals = [
    {name: 'Ash', species: 'rabbit'},
    {name: 'Wolfgang', species: 'dog'},
    {name: 'Laula', species: 'cat'},
    {name: 'Alucard', species: 'dog'},
    {name: 'Poe', species: 'raven'}
]

//convetional form
{/*function getDogs(animals){
   var dogs = []

    for(var i = 0; i < animals.length; i++) {
        if(animals[i].species === 'dog')
        dogs.push(animals[i])
    }
    return dogs
}*/}


var isDog = function(animals) {
    return animals.species === 'dog'
}

var dogs = animals.filter(isDog)

console.log(dogs)

//console.log(getDogs(animals))
