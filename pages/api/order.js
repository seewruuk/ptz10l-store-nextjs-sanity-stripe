
import { client } from './../../lib/client';


export default async function handler(req, res) {

    switch (req.method) {

        case "POST":

            const newOrder = await JSON.parse(req.body);
            try {

                await client.create({
                    _type: "order",
                    firstname: newOrder.firstname,
                    secondname: newOrder.secondname,
                    email: newOrder.email,
                    phone: newOrder.phone,
                    address: newOrder.address,
                    number: newOrder.number,
                    apartment: newOrder.apartment,
                    postcode: newOrder.postcode,
                    city: newOrder.city,
                    total: newOrder.total,
                    firstItem: newOrder.firstItem,
                    secondItem: newOrder.secondItem,

                }).then((data) => {
                    res.status(200).json(data._id);
                })

            } catch (error) {
                console.log(error);
                res.status(500).json({ msg: "error", error })
            }
            break;


    }

}