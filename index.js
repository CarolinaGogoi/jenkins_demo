const express = require('express');

const app = express()

app.use('/',(req,res) => {
    res.json({message: 'Say Hello from NodeJS'})
})

app.listen(3000, () => {
    console.log('Listening to post 3000')
})