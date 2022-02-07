import db from '../config/config.js'

export const createCourse = (req, res) => {
    
    const {title, description, duration} = req.body

    db.query('INSERT INTO course (title, description, duration) VALUES(?,?,?)', [title, description, duration],
     (err, result) => {
        if(err){
            console.log(err);
        }
    }) 
    res.send(`data Stored`)
}

export const getAllCourses = (req, res) => {
    db.query('SELECT * FROM course',
     (err, result) => {
        if(err){
            console.log(err);
            res.json({message : "error"})
        }else{
            res.json({message : "success",result})
        }
    })
}
export const getCourseById = (req, res) => {
    const {id} = req.params
    db.query('SELECT * FROM course WHERE course_id = ?',[id],
     (err, result) => {
        if(err){
            res.json({message : "error"})
            console.log(err);
        }else{
            res.json({message : "success",result})
        }
    })
}