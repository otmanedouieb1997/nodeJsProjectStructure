const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({expanded: true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Server run at port 3000...')
})
