import mongoose from 'mongoose';

const restModel = mongoose.Schema({
    name_of_restaurant : {
        type : String,
        required : true,
    },
    description_of_restaurant : {
        type : String,
        require : true,
    },
    location: { 
        type: { type: String, default : "Point" },
        coordinates: []
       },
    average_rating_of_restaurant : {
        type : String,
        require : true,
    },
    number_of_ratings : {
        type : Number,
        require : true,
    },
   
    createdAt : {
        type : Date,
        default : new Date(),
    },
})

const RestModel = mongoose.model('restaurant', restModel)

export default RestModel;