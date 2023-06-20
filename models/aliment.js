import { Schema, model, models } from 'mongoose';

const AlimentSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  calories: {
    type: Number,
    required: [true, 'Calories is required.'],
  },
  protein: {
    type: Number,
    required: [true, 'Protein is required.'],
  },
  fat: {
    type: Number,
    required: [true, 'Fat is required.'],
  },
  carbs: {
    type: Number,
    required: [true, 'Carbs is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
  }
});

const Aliment = models.Aliment || model('Aliment', AlimentSchema);

export default Aliment;