const express = require('express');
const router = express.Router();
const projectDB = require('../data/helpers/projectModel');


router.get('', async (req, res, next) => {
    try {
        projectDB.get().then((result) => {
            if (!Array.isArray(result)) {
                res.status(404).json({errorMessage: "The 'project' table does not exist"})
            } else {
                res.status(200).json(result)
            }
        }).catch((err) => { 
            console.log(err)
            res.status(500).json({errorMessage: "Could not fetch projects."})
        });
    } catch(err) {
        console.log(err)
        throw err;
    }
})
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        projectDB.get(id).then((result) => {
            if (!result) {
                res.status(404).json({errorMessage: "The project with that id does not exist"})
            } else {
                res.status(200).json(result)
            }
        }).catch((err) => { 
            console.log(err)
            res.status(500).json({errorMessage: "Could not fetch project."})
        });
    } catch(err) {
        console.log(err)
        throw err;
    }
})
router.post('', async (req, res, next) => {
    const { name, description} = req.body;
    if (!name || !description) { 
        return res.status(500).json({errorMessage: "Please provide both name and description"})
    }
    try {
        const completed = req.body.completed ? req.body.completed : false;
        projectDB.insert({name, description, completed}).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json({errorMessage: "Could not create new project."})
        });
    } catch(err) {
        console.log(err)
        throw err;
    }
})
router.delete('/:id', async (req, res, next) => {
    try {

    } catch(err) {
        console.log(err)
        throw err;
    }
})
router.put('/:id', async (req, res, next) => {
    try {

    } catch(err) {
        console.log(err)
        throw err;
    }
})

module.exports = router;