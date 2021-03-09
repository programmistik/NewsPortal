"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsSchema = void 0;
const mongoose = require("mongoose");
exports.NewsSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    date_posted: String
});
//# sourceMappingURL=news.schema.js.map