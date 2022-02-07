import express from 'express'
import cors from 'cors'
import courseRoutes from './routes/course.js'
import studentsRoutes from './routes/student.js'
import trainersRoutes from './routes/trainer.js'
import sessionsRoutes from './routes/session.js'
import enrolmentsRoutes from './routes/enrolment.js'
import db from './config/config.js'
import session from 'express-session'

const app = express()

app.use(cors())
app.use(express.json({limit : "30mb", extended : true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

db.connect((err) => {
    if(err) console.log(err);
    console.log(`MYSQL Database connected`);
})

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
//Routes
//User
app.use('/courses', courseRoutes)
app.use('/students', studentsRoutes)
app.use('/trainers', trainersRoutes)
app.use('/sessions', sessionsRoutes)
app.use('/enrolments', enrolmentsRoutes)


app.use('/', (req, res) => {
    res.send('E-Code Backend')
})

app.listen(5000, () =>{
    console.log(`Server is running on PORT 5000`);
} )