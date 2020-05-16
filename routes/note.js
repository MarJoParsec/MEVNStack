import express from 'express';
const router = express.Router();

//import note model
import Note from '../models/note';

//Add a note
router.post('/new-note', async(req, res) => {
    const body = req.body;
    try {
        const noteDB = await Note.create(body);
        res.status(200).json(noteDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error',
            error
        })
    }
});

/* Get with paramerter */
router.get('/note/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const noteDB = await Note.findById({_id});
        res.json(noteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error',
            error
        })
    }
});

/* Get with all the documents*/
router.get('/note', async(req, res) => {
    try {
        const noteDB = await Note.find();
        res.json(noteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error',
            error
        })
    }
});

/* Delete a Note */
router.delete('/note/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const noteDB = await Note.findByIdAndDelete({_id});
        if (!noteDB) {
            return res.status(400).json({
                mensaje: 'Note not found by id',
                error
            })
        }
        res.json(noteDB);
    }catch (error) {
        return res.status(400).json({
            mensaje: 'Error',
            error
        })
    }
});

/* Update doc */
router.put('/note/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const noteDB = await Note.findByIdAndUpdate(
            _id,
            body,
            {new: true}
        );
        res.json(noteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error',
            error
        })
    }
});

//Export config from express app
module.exports = router;