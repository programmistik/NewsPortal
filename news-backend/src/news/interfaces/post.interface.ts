import { Document } from 'mongoose';

export interface Post extends Document {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly date_posted: string
}