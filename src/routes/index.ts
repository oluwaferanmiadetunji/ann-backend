import express from 'express';
import Controller from '../controller';

const router = express.Router();

router.route('/').post(Controller.createRating).get(Controller.queryRatings);

router.route('/:id').get(Controller.getRatingById).patch(Controller.updateRatings).delete(Controller.deleteRating);

export default router;
