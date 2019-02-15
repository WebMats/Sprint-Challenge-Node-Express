const express = require('express');
const router = express.Router();
const actionDB = require('../data/helpers/actionModel');


router.get('', async (req, res, next) => {
    try {
        actionDB.get().then((result) => {
            if (!Array.isArray(result)) {
                res.status(404).json({errorMessage: "The 'action' table does not exist"})
            } else {
                res.status(200).json(result)
            }
        }).catch((err) => {
            console.log(err)
            res.status(500).json({errorMessage: "Could not fetch actions."})
        });
    } catch(err) {
        console.log(err)
        throw err;
    }
})
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        actionDB.get(id).then((result) => {
            if (!result) {
                res.status(404).json({errorMessage: "The action with that id does not exist"})
            } else {
                res.status(200).json(result)
            }
        }).catch((err) => {
            console.log(err)
            res.status(500).json({errorMessage: "Could not fetch action."})
        });
    } catch(err) {
        console.log(err)
        throw err;
    }
})
router.post('', async (req, res, next) => {
    try {

    } catch(err) {
        console.log(err)
        throw err;
    }
})
router.delete('', async (req, res, next) => {
    try {

    } catch(err) {
        console.log(err)
        throw err;
    }
})
router.put('', async (req, res, next) => {
    try {

    } catch(err) {
        console.log(err)
        throw err;
    }
})

module.exports = router;