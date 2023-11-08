const express = require("express");
const app = express();
const port = 9001;
const Flower = require("./models/Flowers")

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

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

app.listen(port, () => {
  console.log(`server running : ${port}`);
});
