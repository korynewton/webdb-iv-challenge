const router =  require('express').Router()

const Dishes =  require('./dishes-model')


router.get('/', async (req, res) => {
    // get dishes from the database
    try {
      const dishes = await Dishes.getDished();
      res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json(error);
    }
  });

// router.get('/:id', async (req, res) => {
//   // get the dishes from the database
//   try {
//     const dishes = await Dishes.getDish(req.params.id);
//     res.status(200).json(dishes);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

router.post('/', async (req, res) => {
  try {
    const dish = await Dishes.addDish(req.body);
    res.status(201).json(dish);
  } catch {
    res.status(500).json({ message: 'error in adding dish' });
  }
});

router.get('/:id', async (req, res) => {
  // get the dishes from the database
  try {
    const dishes = await Dishes.getDish(req.params.id);
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;