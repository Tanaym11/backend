const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    Name: { type: String, required: true },
    Year_of_batch: {type: Number, required: true},
    College_id: { type: String, required: true},
    Skills: [{type: String,required: true}] 
},{
    timestamps: true,
});

const Student = mongoose.model('Student',studentSchema);

module.exports= Student;