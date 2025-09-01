interface IDetailedName {
    manufacturer: string,
    base: string
}

interface IDetailedPrice {
    tax: number,
    base: number
}

interface IProduct<NameType = string, PriceType = number> {
    name: NameType,
    price: PriceType
}

const pen : IProduct = {
    name: 'Camlin Fountain pen',
    price: 100
};

const pencil : IProduct<IDetailedName, number> = {
    name: {
        manufacturer: 'Apsara',
        base: 'Extra dark'
    },
    price: 10
};

const eraser : IProduct<string, IDetailedPrice> = {
    name: 'Apsara Eraser',
    price: {
        tax: 2,
        base: 10
    }
};