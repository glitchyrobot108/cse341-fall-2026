require("dotenv").config()
const express = require("express")

const app = express()

app.get("/professional", (req, res)=>{
    const data = {
        professionalName: "Casey Owens",
        base64Image: require("./image"),
        nameLink: {firstName: "Casey", lastName: "Owens", url: "https://www.linkedin.com/in/caseyowens"},
        primaryDescription: " Software Engineer with 5 years of experience in developing scalable web applications.",
        workDescription1: "Hope to work somewhere doing Software Development.",
        workDescription2: "I have experience in Game Development with GameMaker Studio 2 and Godot.",
        linkTitleText: "Here's my LinkedIn and GitHub",
        linkedInLink:{link:"https://www.linkedin.com/in/casey-o-41730a271/", text:"LinkedIn Profile"},
        githubLink:{link:"https://www.github.com/glitchyrobot108", text:"GitHub Profile"}
    }
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json(data)
})

app.listen(process.env.PORT, console.log(`Server running on port: ${process.env.PORT}`))