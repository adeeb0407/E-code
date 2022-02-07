import db from '../config/config.js'
import session from 'express-session'


export const createCourse = (req, res) => {
    
    const {fullname, age, contact, location} = req.body

    db.query('INSERT INTO student (fullname, age, contact, location) VALUES(?,?,?,?)', [fullname, age, contact, location],
     (err, result) => {
        if(err){
            console.log(err);
        }
    }) 
    res.send(`data Stored`)
}

export const getAllStudents = (req, res) => {
    db.query('SELECT * FROM student',
     (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.json(result)
        }
    })
}

export const studentLogin = (req, res) => {
    const {contact} = req.body

    console.log(contact);

    db.query('SELECT * FROM student WHERE contact = ?', [contact],
     (err, result) => {
        if(err){
            console.log(err);
        }else{
            if(result.length === 0){
                res.json({message : "error"})
            }else{
            res.json({message : "success", result, occ : "student"})
        }
        }
    })
}

