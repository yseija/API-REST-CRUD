const { Router, urlencoded } = require('express');
const router = Router();
const users = require('../sample.json');
const underscore = require('underscore')



router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const { name, username,email } = req.body;
    if (name && username && email) {
        const id = users.length + 1;
        const newusers = { ...req.body, id };
        users.push(newusers);
        res.json(users);
    }
    else {
        res.send('Error');
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, username,email } = req.body;
    if (name && username && email) {
        underscore.each(users, (user, i) => {
            if (user.id == id) {
                user.name = name;
                user.username = username;
                user.email = email;
            }
        });
        res.json(users);
    } else {
        res.status(500).json({ error: 'Error' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        underscore.each(users, (user, i) => {
            if (user.id == id) {
                users.splice(i, 1);
            }
        });
        res.json(users);
    }
});

module.exports = router;
