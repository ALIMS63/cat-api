import express from 'express';

const router = express.Router();



router.route('/')
  .get(async (req, res) => {
    res.render('main');
  });


export default router;
