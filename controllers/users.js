const fs = require('fs').promises

const getUsers = async (req,res)=>{
	const data = await fs.readFile('./Data/Users.json','utf8')
	if(data === ''){
		return res.status(200).json({success:true, data:null})
	}
	try{
		const users = JSON.parse(data)
		res.status(200).json({success:true,data:users})
	}catch(error){
		console.log(error)
		res.status(401).json({success:false, error:error})
	}
}

const addUsers = async (req,res)=>{
	const {user} = req.body
	console.log(user)
	if(!user){
		return res.status(401).json({success:false, error:'This is not user'})
	}
	
	const data = await fs.readFile('./Data/Users.json','utf8')
	try{
		let users
		if(data === ''){
			users = new Object
			users.users = []
			users.users.push(user)
		}else{
			users = JSON.parse(data)

			console.log(JSON.stringify(users))
			users.users.push(user)
			console.log(JSON.stringify(users))
		}
		fs.writeFile('./Data/Users.json',JSON.stringify(users))
		res.status(200).json({success:true})
	}catch(error){
		console.log(error)
		res.status(401).json({success:false, error:error})
	}
}

const updateUsers = async (req,res)=>{
	const {id} = req.params
	const {name} = req.body

	const data = await fs.readFile('./Data/Users.json','utf8')
	try{
		const users = JSON.parse(data)
		const usersAry = users.users

		if(!usersAry.find((user)=>user.id === id)){
			return res.status(401).json({success:false, error:'This user is not exist'})
		}

		const newUsers = usersAry.map((user)=>{
			if(user.id === id){
				user.name = name 
			}
			return user
		})

		users.users = newUsers
		fs.writeFile('./Data/Users.json',JSON.stringify(users))
		res.status(200).json({success:true})
	}catch(error){
		console.log(error)
		res.status(401).json({success:false, error:error})
	}
}

const deleteUsers = async (req,res)=>{
	const {id} = req.params
	
	const data = await fs.readFile('./Data/Users.json','utf8')
	try{
		const users = JSON.parse(data)
		const usersAry = users.users

		if(!usersAry.find((user)=>user.id === id)){
			return res.status(401).json({success:false, error:'This user is not exist'})
		}

		const newUsers = usersAry.filter((user)=> user.id!=id)
		users.users = newUsers
		fs.writeFile('./Data/Users.json',JSON.stringify(users))
		res.status(200).json({success:true})
	}catch(error){
		console.log(error)
		res.status(401).json({success:false, error:error})
	}
}

module.exports = {
	getUsers,
	addUsers,
	updateUsers,
	deleteUsers
}
