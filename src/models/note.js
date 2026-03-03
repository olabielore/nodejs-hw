import { Schema } from 'mongoose';
import { model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    tag: {
      type: String,
      default: 'Todo',
      enum: [
        'Shopping',
        'Meeting',
        'Travel',
        'Health',
        'Work',
        'Finance',
        'Personal',
        'Ideas',
        'Important',
        'Todo',
      ],
    },
  },
  {
    timestamps: true,
  },
);

export const Note = model('Note', noteSchema);
