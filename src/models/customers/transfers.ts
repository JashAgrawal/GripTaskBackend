import mongoose from 'mongoose';

const transfers = new mongoose.Schema(
  {
    FromName: {
      type: String,
      index: true,
    },
    ToName: { type: String, index: true },
    Amount: { type: String, index: true },
  },
  { timestamps: true },
);

export default mongoose.model('transfers', transfers);
