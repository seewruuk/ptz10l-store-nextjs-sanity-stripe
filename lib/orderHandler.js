

export const createOrder = async({
    firstname, secondname, email, 
    phone, address, number, 
    apartment,  postcode, city, total, firstItem, secondItem
}) => {
    const res = await fetch('./api/order' , {
        method : "POST",
        body: JSON.stringify({
            firstname: firstname,
            secondname: secondname,
            email: email,
            phone: phone,
            address: address,
            number: number,
            apartment: apartment,
            postcode: postcode,
            city: city,
            total: total,
            firstItem: firstItem,
            secondItem: secondItem,

        }),
    });
    const id = await res.json();
    return id;
}