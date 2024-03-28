
import mongoose from 'mongoose'
import dotenv  from 'dotenv'

import app from './app.js'

dotenv.config({path: './config.env'})

mongoose.connect(process.env.URI).then(() => console.log('DB connection successful'));

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('app is listening on port 5000')
})
