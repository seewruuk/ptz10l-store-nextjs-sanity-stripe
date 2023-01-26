export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: 'firstname',
            title: "Imie",
            type: "string",
        },
        {
            name: 'secondname',
            title: "Nazwisko",
            type: "string",
        },
        {
            name: 'email',
            title: "Email",
            type: "string",
        },
        {
            name: 'phone',
            title: "Telefon",
            type: "string",
        },
        {
            name: 'address',
            title: "Ulica",
            type: "string",
        },
        {
            name: 'number',
            title: "Numer budynku",
            type: "string",
        },
        {
            name: 'apartment',
            title: "Numer lokalu",
            type: "string",
        },
        {
            name: 'postcode',
            title: "Kod pocztowy",
            type: "string",
        },
        {
            name: 'city',
            title: "Miasto",
            type: "string",
        },

        {
            name: 'total',
            title: "Total",
            type: "number"
        },
        {
            name: 'firstItem',
            title: "Czarna",
            type: "number"
        },
        {
            name: 'secondItem',
            title: "Czerwona",
            type: "number"
        },
        {
            name: 'warning',
            title: "Uwagi",
            type: "text",
        },

    ]
}