//CHAPTER 8//****PERFORMING LOGIC IN LOOPS

//'for... of' loops: phones

//new battery tech will ad o.4 grams to all phones' weight

const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]

//step through the array of phones
for (const phone of phones) {
    // add 0.4 grams to the weight of each phone
    phone.weight = phone.weight + 0.4

    //add weight to the output
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}