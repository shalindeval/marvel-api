const express = require('express')
const bodyparser = require('body-parser')
const ReadDir = require('./ReadDir.js')
const fs = require('fs')
const path = require('path')

const app = express();
app.use(bodyparser.json())
app.use("/superhero",express.static("images"))

app.get('/', (req,res) => {
	let URLs = []
	ReadDir.ReadDir((data)=>{
		data[0].forEach((items,i) =>{
			URLs.push(`http://localhost:3000/superhero/${items}`)
		})
	res.json(URLs)
	})
})

app.listen(process.env.PORT||3000)