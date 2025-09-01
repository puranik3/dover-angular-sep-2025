interface IDetailedName {
    manufacturer: string,
    base: string
}

interface IDetailedPrice {
    tax: number,
    base: number
}

interface IProduct {
    name: string,
    price: number
}

interface IProductDetailedName {
    name: IDetailedName,
    price: number
}

interface IProductDetailedPrice {
    name: string,
    price: IDetailedPrice
}

const pen : IProduct = {
    name: 'Camlin Fountain pen',
    price: 100
};

const pencil : IProductDetailedName = {
    name: {
        manufacturer: 'Apsara',
        base: 'Extra dark'
    },
    price: 10
};

const eraser : IProductDetailedPrice = {
    name: 'Apsara Eraser',
    price: {
        tax: 2,
        base: 10
    }
};

export {}