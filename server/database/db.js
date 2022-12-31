import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.y7rtpe4.mongodb.net/blog?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;