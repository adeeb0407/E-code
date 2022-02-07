import db from '../config/config.js'

export const createTrainer = (req, res) => {
    
    const {fullname, contact, country, availability } = req.body

    db.query('INSERT INTO trainer (fullname, contact, country, availability) VALUES(?,?,?,?)', [fullname, contact, country, availability],
     (err, result) => {
        if(err){
            console.log(err);
        }
    }) 
    res.send(`data Stored`)
}

export const getAllTrainer = (req, res) => {
    db.query('SELECT * FROM trainer',
     (err, result) => {
        if(err){
            res.json({message : "error"})
            console.log(err);
        }else{
            res.json({message : "success",result})
        }
    })
}

export const trainerLogin = (req, res) => {
    const {contact, fullname} = req.body
    console.log(contact);
    //9673261375
    //Shakil Shaikh
    db.query('SELECT * FROM trainer WHERE (contact = ? AND  fullname = ?)', [contact, fullname],
     (err, result) => {
        if(err){
            console.log(err);
        }else{
            if(result.length === 0){
                res.json({message : "error"})
            }else{
                res.json({message : "success", result, occ : "trainer"})
        }
        }
    })
}
