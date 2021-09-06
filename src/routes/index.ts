import express from 'express';
import Controller from '../controller';

const router = express.Router();

router.route('/').post(Controller.createRating).get(Controller.queryRatings);

router.route('/data').post(Controller.addData).get(Controller.getData);

router.route('/:id').get(Controller.getRatingById).patch(Controller.updateRatings).delete(Controller.deleteRating);

export default router;
