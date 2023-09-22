import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
    username:{
        type: String,require:true,
    },
    email:{
        type: String,require:true,unique:true
    },
    phone:{
        type: Number,require:true
    },
    message:{
        type: String,require:true
    }
    

})
const User = mongoose.models.users || mongoose.model("users",usersSchema);
export default User;