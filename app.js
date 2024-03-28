
import  express from 'express'
import cors from 'cors'
import AppError from './utils/appError.js'
import authRoutes from './routes/authRoutes.js'
import generalRoutes from './routes/generalRoutes.js'

const app = express()

app.use(cors())
app.options('*', cors())

app.use(express.json())


app.get('/', (req, res) => {
    res.send('It is working live')
})

app.get('/apis', (req, res) => {
    res.json([{me: 'it is working live'}])
})



// app.get('/auth/ass', (req, res) => {
//     res.send('getting something out')
// })

app.use('/auth', authRoutes);

app.use('/', generalRoutes)


// app.all('*', (req, res, next) => {
//     const err = new AppError(`${req.originalUrl} not found!`, 404)
//     next(err)
// })


export default app;