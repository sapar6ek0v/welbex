import mongoose from "mongoose"

const {Schema, model} = mongoose

const newSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    message: {
        type: String,
        default: "No message"
    },
    image: {
        type: String
    }
}, {timestamps: true, versionKey: false})


export default model('messages', newSchema)