const express = require("express");
const app = express();
const port = 9001;
const Flower = require("./models/Flowers")
const fs = require("fs");
const https = require("https");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const file = fs.readFileSync("./1E1E39C06F84D2F12E2D7ACBE472A999.txt")


app.post("/api/preference", async (req, res) => {
  try {
    const { question1, question2, question3, question4 } = req.body;

    const matchingFlower = await Flower.findAll({
      where: {
        q1: question1,
        q2: question2,
        q3: question3,
        q4: question4,
      },
    });

    if (!matchingFlower) {
      return res.status(404).send("Matching flower not found");
    }

    console.log(matchingFlower)

    res.json({ matchingFlower });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/view/flower", async (req,res) =>{
  try {
    const id = req.query.id

    const flowerClick = await Flower.findOne({
      where:{
        id:id
      }
    })

    res.json(flowerClick)
  } catch (error) {
    console.error(error)
    res.status(500).json({message: "Internal Server Error"})
  }
})

app.get('/.well-known/pki-validation/1E1E39C06F84D2F12E2D7ACBE472A999.txt', (req, res) => {
  res.sendFile('/home/ubuntu/mobileApp-BE/1E1E39C06F84D2F12E2D7ACBE472A999.txt')
})

app.listen(port, () => {
  console.log(`server running : ${port}`);
});
