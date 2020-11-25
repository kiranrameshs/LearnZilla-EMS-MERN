import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is a required property."

    },
    description: {
        type: String

    },
    createdDate: {
        type: Date,
        default: Date.now

    },
    lastModifiedDate: {
        type: Date,
        default: Date.now

    }
   }, 
   {
       versionKey: false

   });

//create a virtual id , not saved in DB
TodoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});
//converting the virtual id to json when needed
TodoSchema.set('toJSON', { virtuals: true });

//creating a collection
const model = mongoose.model('allTodos', TodoSchema);

export default model;