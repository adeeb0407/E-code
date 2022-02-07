import db from '../config/config.js'

export const sessionStoredProcedure = (req, res) => {
    db.query('call fetchSession',
     (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.json(result)
        }
    })
}



export const createSession = (req, res) => {
    
    const {title, session_time, duration, course_id, trainer_id } = req.body

    db.query('INSERT INTO session (title, session_time, duration, course_id, trainer_id) VALUES(?,?,?,?,?)', [title, session_time, duration, course_id,trainer_id],
     (err, result) => {
        if(err){
            console.log(err);
        }
    }) 
    res.send(`data Stored`)
}

export const getAllSession = (req, res) => {
    db.query('SELECT * FROM session INNER JOIN student',
     (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.json(result)
        }
    })
}

export const getSessionByID = (req, res) => {
    const {id} = req.params
    db.query('SELECT * FROM session INNER JOIN trainer ON session_id = session.trainer_id INNER JOIN course WHERE session_id = ? ', [id],
     (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.json(result)
        }
    })
}
