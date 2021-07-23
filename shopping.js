const groceries = [
    {
        id: 1,
        name: "milk",
        price: 3.99
    },
    {
        id: 2,
        name: "eggs",
        price: 2.45
    },
    {
        id: 3,
        name: "pizza rolls",
        price: 5.99
    },
    {
        id: 4,
        name: "tofu",
        price: 3.99
    },
    {
        id: 5,
        name: "cherries",
        price: 4.40
    },
    {
        id: 6,
        name: "sandwich buns",
        price: 5.20
    },
    {
        id: 7,
        name: "mustard",
        price: 2.30
    }

]

//console.log(groceries)
//declare a variable with an object that is one of the new grocery items
// const cookies = {
//     id: 8,
//     name: "cookies",
//     price: 7.25,
//     dateCreated: "July 16 at 1:25"
// }

// //make a function with a parameter 'new item'.  The function takes the argument passed in, pushes it onto the array, and console logs the updated array.
// function addToShoppingList (newItem) {
//    groceries.push(newItem)
//     console.log(groceries)
// }

// //call the function.  In the parameter's place, use the new grocery item object's name.
// addToShoppingList(cookies)



const addToList = (itemObject) => {
    const lastIndex = groceries.length - 1
    const currentLastItem = groceries[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1
    
    itemObject.id = idForNewItem
    groceries.push(itemObject)
}

const skittles = {
        name: "skittles",
        price: 1.30
}

addToList(skittles)

const apples = {
    name: "apples",
    price: 10.30
}

addToList(apples)

const carrots = {
    name: "carrots",
    price: 8.70
}

addToList(carrots)

const juice = {
    name: "juice",
    price: 9.50
}

addToList(juice)

const chicken = {
    name: "chicken",
    price: 14.15
}

addToList(chicken)


// for (grocery of groceries) {
//     console.log(`The ${grocery.name} costs ${grocery.price}.`)
// }

for (const grocery of groceries) {
    if (grocery.price >= 8) {
        console.log(grocery.name)
    }
    
}

