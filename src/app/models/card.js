import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
    role: {
        type: String, 
        required: true
    }, 
    copyright: {
        type: Number, 
        required: true
    }
})

const Card = mongoose.model.Card || mongoose.model('Card', cardSchema)


export default Card