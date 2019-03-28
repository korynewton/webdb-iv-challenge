const router =  require('express').Router()

const Dishes =  require('./dishes-model')


router.get('/', async (req, res) => {
    // get dishes from the database
    try {
      const dishes = await Dishes.find();
      res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json(error);
    }
  });


module.exports = router;