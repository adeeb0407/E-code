import db from '../config/config.js'


export const getAllEnrolment = (req, res) => {
    db.query('call fetchEnrolemnt',
     (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.json(result)
        }
    })
}