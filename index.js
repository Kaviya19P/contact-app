const express = require('express')

const router = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();
const connectDb = require('./config/dbConnection')

connectDb();
const app = express()

const port = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/contacts' , router)
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen( port, () => {
	console.log(`server is running on port ${port}`)
})
