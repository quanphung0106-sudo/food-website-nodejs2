const router = require("express").Router();
const Food = require("../models/Food");

//get all foods
//[GET] /api/foods/
router.get("/", async (req, res) => {
  try {
    const food = await Food.find({});
    res.status(200).json(food);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a food
//[POST] /api/foods/
router.post("/", async (req, res) => {
  try {
    const newFood = new Food({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
    });
    const food = await newFood.save();
    res.status(200).json(food);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a food
//[PUT] /api/foods/:id
router.put('/:id', async (req, res) => {
  try {
    const currentFood = await Food.findById(req.params.id);
    await currentFood.updateOne({ $set: req.body });
    res.status(200).json("Your food has been updated.");
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a food
router.delete('/:id', async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        await food.delete();
        res.status(200).json('Your food has been deleted.');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
