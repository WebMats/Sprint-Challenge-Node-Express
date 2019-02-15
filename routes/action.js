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
    const { project_id, description, notes } = req.body;
    if (!project_id || !description || description.length > 128 || !notes) {
        return res.status(500).json({errorMessage: "Please provide a project_id, notes and a description that is less than 128 characters. "})
    }
    try {
        const completed = req.body.completed ? req.body.completed : false;
        actionDB.insert({project_id, description, notes, completed}).then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json({errorMessage: "Could not create new action."})
        });
    } catch(err) {
        console.log(err)
        throw err;
    }
})
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        actionDB.remove(id).then((result) => {
            if (result < 1) {
                res.status(404).json({errorMessage: "The action with that id either does not exist or could not be deleted."})
            } else {
                res.status(200).json({message: "Deletion request was successful"})
            }
        }).catch((err) => {
            console.log(err)
            res.status(500).json({errorMessage: "Could not delete action."})
        });
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