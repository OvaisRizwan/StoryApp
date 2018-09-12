import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: {
        type: 'String',
        required: true
    },
    description: {
        type: 'String',
        required: true
    },
    video: {
        type: 'String',
        required: true
    },
    dateAdded: {
        type: 'Date',
        default: Date.now,
        required: true
    },
    status: {
        type: 'boolean'
    },
});

export default mongoose.model('Story', storySchema);