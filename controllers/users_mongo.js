const mongoose = require("mongoose")
const UserModel = require("../Data/Users")

const getUsers = async (req,res)=>{
	try{
		const userDoc = await UserModel.where().select({_id : 0,__v : 0}).populate('recommender','id')
		console.log(userDoc)
		if(userDoc.length === 0){
			return res.status(200).json({success : true, data:null})
		}
		
		res.status(200).json({success : true, data:userDoc})
	}catch(e){
		console.error(e)
		res.status(401).json({success : false, error:e})	
	}
}

const addUsers = async (req,res)=>{
	const {user} = req.body
	
	try{
		await userCheck(user)
		
		if(user.recommender){
			const recommendUser = await UserModel.where("id").equals(user.recommender).select("_id")
			console.log(recommendUser)
		
			await userSearch(recommendUser)
			
			user.recommender = recommendUser[0]._id
			
			console.log(user)
		}
		
		console.log("User Create")
		
		const userDoc = await UserModel.create({id:user.id})
		
		console.log("User Data Put")
		
		for(const pt in user){
			userDoc[pt] = user[pt]
		}
		
		console.log(userDoc)
		
		await userDoc.save()
		
		res.status(200).json({success : true})
	}catch(e){
		console.error(e)
		res.status(401).json({success : false, error:e})	
	}
}

const updateUsers = async (req,res)=>{
	const {id} = req.params
	const {user} = req.body
	user.id = id
	
	console.log(user)
	
	try{
		await userCheck(user)
		
		const userDoc = (await UserModel.where("id").equals(user.id))[0]
		console.log(userDoc)
		
		await userSearch(userDoc)
		
		for(const pt in user){
			if(userDoc[pt]){
				userDoc[pt] = user[pt]
			}
		}
		console.log(userDoc)
		
		await userDoc.save()
		
		res.status(200).json({success : true})
	}catch(e){
		console.error(e)
		res.status(401).json({success : false, error:e})	
	}
}

const deleteUsers = async (req,res)=>{
	const {id} = req.params
	
	try{
		userCheck({id:id})
		
		const result = await UserModel.deleteOne({"id":id})
		
		console.log(result)
		
		res.status(200).json({success : true})
	}catch(e){
		console.error(e)
		res.status(401).json({success : false, error:e})	
	}
}

const userCheck = (user)=>{
	console.log("User Check")
	return new Promise((resolve,reject)=>{
		if(!user){
			reject("This is not User")
		}
		if(!user.id){
			reject("User must have id")
		}
		if(user.id.length < 10){
			reject("User Id must be longer than 10")
		}
		resolve()
	})
}

const userSearch = (user)=>{
	console.log("User Search")
	return new Promise((resolve,reject)=>{
		if(Object.keys(user).length === 0){
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