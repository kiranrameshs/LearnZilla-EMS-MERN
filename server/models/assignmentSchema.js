import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  assignmentname: {
      type: String,
      required: [true, "Please check your data entry, no assignment name specified!"]
  },
  assignmentdescription: {
      type: String,
      default: ''
  },
  assignmentstartdate: {
      type: Date,
      default: Date.now
  },
  assignmentenddate: {
      type: Date,
      required: [true, "Please check your data entry, no assignment end date specified!"]
  },
  assignmentscrore: Number
});

assignmentSchema.virtual('id').get(function() {
    return this._id.toHexString();
});
assignmentSchema.set('toJSON', { virtuals: true });

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;
