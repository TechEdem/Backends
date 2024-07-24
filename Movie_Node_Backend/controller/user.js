const User = require('../models/user');

exports.getAllUsers = (res, req)=>{
    try {
        const users = User.find();
        res.status(200).json({success:true, msg:'Users fetched', users});
    } catch (error) {
        res.status(error.status).json({success:false, msg:"Users not found"});
    }
    
}
exports.getUser = (res, req)=>{
    try {
        const user = User.findById(req.params.id);
        if(!user){
            return res.status(404).json({success:false, msg: 'User not found'});
        }
        res.status(200).json({success:true, msg:'User fetched', user});
    } catch (error) {
        res.status(error.status).json({success:false, msg: 'User not found', error});
    }
}
exports.createUser = async (res, req)=>{
    try {
        const user =  await User.create(req.body);
        res.status(201).json({success:true, msg:'User created', user});
    } catch (error) {
        res.status(400).json({success:false, msg:error.message});
    }
}
exports.updateUser = (res, req)=>{
    try {
        const user =  User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!user){
            return res.status(404).json({success:false, msg: 'User not found'});
        }
        res.status(200).json({success:true, msg:'User updated', user});
    } catch (error) {
        res.status(500).json({success:false, msg: 'Error updating user', error});
    }
}
exports.deleteUser = (res, req)=>{
    try {
        const user =  User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({success:false, msg: 'User not found'});
        }
        res.status(200).json({success:true, msg:'User deleted'});
    } catch (error) {
        res.status(500).json({success:false, msg: 'Error deleting user', error});
    }
}

