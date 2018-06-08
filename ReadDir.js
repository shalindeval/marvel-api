const fs = require('fs')
const path = './images'
let images = []

const readDir = (callback) =>{
		images = []
	fs.readdir(path,(err,items)=>{
		images.push(items)
		callback(images)
	})
}

module.exports={
	ReadDir:readDir
}