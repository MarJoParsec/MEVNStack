import mongoose from 'mongoose';
const Schema = mongoose.Schema;


/* Un Schema nos sirve para estandarizar 
nuestros documentos en la collection de nuestra base de datos 
*/

const noteSchema = new Schema({
    name: {type: String, required: [true, 'Name required']},
    description: String,
    userId: Number,
    date: {type: Boolean, default: true},
    active: {type: Boolean, default: true}
});

//Convertir a modelo
const Note = mongoose.model('Note', noteSchema);

export default Note;