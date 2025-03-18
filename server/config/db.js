import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB =  () => {

    /*mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
    mongoose.connection.on('connected', () => console.log('Database Connected'))*/

    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "job-portal"
    }).then(()=>{
        console.log("Connected to database.")
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`)
    })

}

export default connectDB