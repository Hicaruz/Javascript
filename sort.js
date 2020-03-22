const numbers = [4, 3, 2, 9, 10, 5, 6, 1, 8, 7]

const order = {
    ASC: ([...items]) => items.sort((a, b) => a - b),
    DESC: ([...items]) => items.sort((a, b) => b - a)
}

const orderBy = ([...arr], type = 'ASC') => {
    const order = {
        ASC: items => items.sort((a, b) => a - b),
        DESC: items => items.sort((a, b) => b - a)
    }
    return Object.keys(order).includes(type) ?
        order[type](arr) :
        new Error(`"${type}" form is not valid`)
}

console.log(numbers)
console.log(orderBy(numbers, 'ASC'))
console.log(orderBy(numbers, 'DESC'))
console.log(orderBy(numbers, 'RR'))
console.log(numbers)

console.log(numbers)
console.log(order.ASC(numbers))
console.log(order.DESC(numbers))
console.log(numbers)


