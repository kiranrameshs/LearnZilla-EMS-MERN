import mongoose from 'mongoose';
import User from 'userSchema';
import Assignment from 'assignmentSchema';
import Course from 'courseSchema';

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  course: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  finalgrade: Number
});

studentSchema.virtual('id').get(function() {
    return this._id.toHexString();
});
studentSchema.set('toJSON', { virtuals: true });

const Student = mongoose.model("Student", studentSchema);

export default Student;
