const mongoose = require("mongoose")
const UserModel = require("./Data/Users")

const getUsers = async (req,res)=>{
	try{
		const userDoc = await UserModel.find()
		console.log(userDoc)
		if(userDoc){
			return res.status(200).json({success : true, data:null})
		}
		
		res.status(200).json({success : true, data:userDoc})
	}catch(e){
		res.status(401).json({success : false, error:e})	
	}
}

const addUsers = async (req,res)=>{
	const {user} = req.body
	
	try{
		await userCheck(user)
		
		const recommendUser = await UserModel.where("id").equals(user.recommender).select("_id")
		console.log(recommendUser)
		
		await userSearch(recommendUser)
		
		const userDoc = await UserModel.create()
		
		for(const pt in user){
			if(User.hasOwnProperty(pt)){
				userDoc[pt] = user[pt]
			}
		}
		
		console.log(userDoc)
		
		await userDoc.save()
		
		res.status(200).json({success : true})
	}catch(e){
		res.status(401).json({success : false, error:e})	
	}
}

const updateUsers = async (req,res)=>{
	const {id} = req.params
	const {user} = req.body
	user.id = id
	
	try{
		await userCheck(user)
		
		const userDoc = await UserModel.where("id").equals(user.id)
		console.log(userDoc)
		
		await userSearch(userDoc)
		
		for(const pt in user){
			if(User.hasOwnProperty(pt)){
				userDoc[pt] = user[pt]
			}
		}
		await userDoc.save()
		
		console.log(userDoc)
		res.status(200).json({success : true})
	}catch(e){
		res.status(401).json({success : false, error:e})	
	}
}

const deleteUsers = async (req,res)=>{
	const {id} = req.params
	const user = {id:id}
	
	try{
		await userCheck(user)
		
		const userDoc = await UserModel.where("id").equals(user.id)
		
		await userSearch(userDoc)
		
		await userDoc.remove()
		
		console.log(userDoc)
		res.status(200).json({success : true})
	}catch(e){
		res.status(401).json({success : false, error:e})	
	}
}

const userCheck = (user)=>{
	return new Promise((resolve,reject)=>{
		if(!user){
			reject("This is not User")
		}
		if(user.id){
			reject("User must have id")
		}
		if(user.id.length < 10){
			reject("User Id must be longer than 10")
		}
		resolve()
	})
}

const userSearch = (user)=>{
	return new Promise((resolve,reject)=>{
		if(!user){
			reject("This is not User")
		}
		resolve()
	})
}

module.exports = {
	getUsers,
	addUsers,
	updateUsers,
	deleteUsers
}