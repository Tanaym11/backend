const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const collegeSchema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }, 
    Year_founded:{type: Number, required: true},
    City:{type: String, required: true},
    State:{type:String, required:true},
    Country:{type:String, required:true},
    No_of_students:{type:Number, required:true},
    Courses:[{type:String, required:true}]
},{
    timestamps: true,
});

const College = mongoose.model('College',collegeSchema);

module.exports= College;