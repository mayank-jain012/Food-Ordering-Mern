import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mayankjain12feb:01127531215@foodordering.nkbsf8b.mongodb.net/')
    .then(()=>console.log("DB Connected"))
    .catch(err=>console.log(err))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.