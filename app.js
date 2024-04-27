const express = require('express')
const cors = require('cors');
const User = require('./mongo');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {

})


app.post("/", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user && user.password === password) {
        res.json("exist"); // Correct credentials
      } else {
        res.json("notexist"); // Incorrect credentials
      }
    } catch (e) {
      res.status(500).json("fail"); // Server error
    }
  });
  

app.post("/signup", async (req, res) => {
    const { email, password } = req.body

    const data = {
        email: email,
        password: password
    }

    try {
        const check = await User.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await User.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})

app.listen(8000, () => {
    console.log("port connected");
})
