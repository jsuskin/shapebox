const express = require('express');
const router = express.Router();
const Shape = require('../models/Shape');

router.get('/', async (req, res) => {
  try {
    const shapes = await Shape.find();
    res.json(shapes);
  } catch(err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const shape = new Shape({
    name: req.body.name,
    type: req.body.type,
    dims: req.body.dims,
    color: req.body.color
  });

  try {
    const savedShape = await shape.save();
    res.json(savedShape);
  } catch(err) {
    res.json({ message: err });
  }
});

router.get('/:shapeId', async (req, res) => {
  try {
    const shape = await Shape.findById(req.params.shapeId);
    res.json(shape);
  } catch(err) {
    res.json({ message: err });
  }
});

router.put('/:shapeId', (req, res) => {
  const id = req.params.shapeId;
  Shape.findByIdAndUpdate(id, { $set: req.body }, (err, result) => {
    if(err){
      console.log(err);
    }
    console.log("RESULT: " + result);
  });
  res.send('Done');
});

router.delete('/:shapeId', async (req, res) => {
  try {
    const removedShape = await Shape.remove({ _id: req.params.shapeId });
    res.json(removedShape);
  } catch(err) {
    res.json({ message: err });
  }
});

module.exports = router;