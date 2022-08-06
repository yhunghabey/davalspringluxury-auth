import mongoose from 'mongoose';
import autoIncrementModelID from '../../utils/counter.model';

// const { Schema } = mongoose;


const userCategorySchema = mongoose.Schema({
  categoryID: {
    type: String,
  },

  description: {
    type: String,
  },

  category: {
    type: String,
    uppercase: true,
  },

  subCategory: {
    type: String,
    uppercase: true,
  },

  createdAt: {
      type: Date,
      default: Date.now,
  },

  createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  },

  deleted: {
    type: Boolean,
    default: false,
    select: false,
  },
});

userCategorySchema.pre('save', function (next) {
    autoIncrementModelID('applicationCount', 'categoryID', this, next, 'UCAT');
});

export default mongoose.model('user-categories', userCategorySchema);
