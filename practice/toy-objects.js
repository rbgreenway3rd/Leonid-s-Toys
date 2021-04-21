const toys = [
    {
        id: 1, 
        name: "Army Man", 
        maker: "BryGuy's Toy Co.", 
        price: 7.50, 
        color: "green", 
        inStock: true, 
    
    },
    
    {
        id: 2, 
        name: "Magic Bouncy Ball",
        maker: "BryGuy's Toy Co.",
        price: 2.00,
        color: ["green", "red", "blue"], 
        inStock: false,
    
    },
    
    {
        id: 3,
        name: "Super YoYo",
        maker: "BryGuy,s Toy Co.",
        price: 9.95,
        color: "yellow",
        inStock: true,
    }
    ]

const balloon = {
    name: 'Balloon',
    maker: 'Ballon World Inc.',
    price: 0.50,
    color: 'white',
    inStock: true,
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId +1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(balloon)

for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`)
}