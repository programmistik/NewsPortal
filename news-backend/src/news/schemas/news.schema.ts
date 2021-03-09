import * as mongoose from 'mongoose';

export const NewsSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    date_posted: String
})