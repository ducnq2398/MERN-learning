require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require('./routes/auth');
const Post = require('./routes/post');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learning.iixiu.mongodb.net/mern-learning?retryWrites=true&w=majority`;
const connectDB = async () => {

    try {
        await mongoose.connect(uri, { useNewUrlParser: true });
        // await mongoose.connect(uri, { useCreateIndex: true });
        // await mongoose.connect(uri, { useFindAndModify: false });
        // await mongoose.connect(uri, { useUnifiedTopology: true });
        console.log("Connected MongoDB");
    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
}

connectDB();
const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/posts', Post);
const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));