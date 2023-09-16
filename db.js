import mongoose from 'mongoose';

const conn = () => {
    mongoose.connect(process.env.DB_URL, {
        dbName: "style-watches",
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to the DB successfully");
    }).catch((err) => {
        console.log(`DB connection error: ${err}`);
    });
};

export default conn;