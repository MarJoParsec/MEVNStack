import express from 'express';
const router = express.Router();

//import model note
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

//Export config from express app
module.exports = router;