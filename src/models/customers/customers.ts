import mongoose from 'mongoose';

  const customers = new mongoose.Schema(
    {
      
      Id: {
    type: String,
    
    index: true,
  },Name: {
    type: String,
    
    index: true,
  },Email: {
    type: String,
    
    index: true,
  },Balance: {
    type: String,
    
    index: true,
  },
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true },
  );
  
  export default mongoose.model('customers', customers);