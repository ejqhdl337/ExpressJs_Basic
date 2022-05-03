import Express from "express";
import Products from "./products.js";

const app = Express();
const port = 3000;

// GET, PUT, POST, DELETE
app.get("/products/:id", (req,res)=>{
	res.json(Products.find((product)=>{
		return +req.params.id === product.id
	}));
	res.send(req.params);
	//res.json(Products);
});

app.listen(port,()=>console.log("listening on port" + port));