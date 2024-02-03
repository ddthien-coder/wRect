import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        mongoose.set('strictQuery', false)
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

export default connectDb;