const { Router} = require('express');
const router = Router();


router.get('/test', (req, res) => {
    const data= {
       "name": "Yel",
       "website":"yel.com" 
    }
    res.json(data);
});

module.exports = router;