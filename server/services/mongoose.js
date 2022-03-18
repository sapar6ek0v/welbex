import mongoose from "mongoose";


const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Database is connecting'))
        .catch(() => console.log('Database isn\'t connecting'))
}

export default dbConnect