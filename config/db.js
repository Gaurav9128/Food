import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://DesiChula:AmitJain3700@cluster0.80dof.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}