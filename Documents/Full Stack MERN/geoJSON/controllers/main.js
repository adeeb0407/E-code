import mongoose from 'mongoose';
import RestModel from '../model/mainModel.js'

export const fetch = async (req, res) => {
    try {
        const fetchData = await RestModel.find()
        res.status(200).json(fetchData)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}
export const fetchRestaurantNearMe = async (req, res) => {
    const {latitude, longitude, raduis} = req.body
    try {
             let query = { location: { $nearSphere: { $geometry: { type: "Point", coordinates: [ latitude, longitude ] }, $maxDistance: raduis } } }
            
             const nearme = await RestModel.find(query)

        res.status(200).json(nearme)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}

// export const addData = async (req, res) => {
    
//     console.log(req.body)
//     const {name_of_restaurant, description_of_restaurant, latitude, longitude, average_rating_of_restaurant, number_of_ratings} = req.body
    
//     const newData = new RestModel({
//         name_of_restaurant : name_of_restaurant,
//         description_of_restaurant : description_of_restaurant,
//         average_rating_of_restaurant : average_rating_of_restaurant,
//         number_of_ratings : number_of_ratings,
//     });
//     try {
//       const createdData =  await newData.save();
//       console.log(`Created Data`)
//          res.json(createdData)
//     } catch (error) {
//         res.status(404).json( {message : error.message} )
//     }
// }