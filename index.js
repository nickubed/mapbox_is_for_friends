let express = require('express')
let app = express()
let layouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')

app.use(layouts)
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))

app.use('/search', require('./controllers/search'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(process.env.PORT || 4000, console.log('Rootin n Tootin on the ice cold beans'))