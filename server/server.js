const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email 
        && req.body.password === database.users[0].password) {
        res.json(database.users[0]);
    } else {
        res.status(400).json('error logging in')
    }
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false
    database.users.forEach((user) => {
        if(user.id===id) {
            found = true
            return res.json(user)
        }
    })

    if(!found) {
        res.status(404).json('no such user')
    }
})

app.post('/register', (req, res) => {
    database.users.push({
        id: '125',
        name: req.body.name,
        email: req.body.email,
        entries: 0,
        joined: new Date()
    })

    res.json(database.users[database.users.length-1])
})


app.put('/image', (req, res) => {
    database.users.forEach(user => {
        if(req.body.id === user.id) {
            found = true
            user.entries++;
            return res.json(user.entries)
        }
    })

    if(!found) {
        res.status(404).json('no such user')
    }
})

app.listen(4000, () => {
    console.log("app is running on port 4000")
})