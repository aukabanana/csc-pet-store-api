import { Router } from 'express';
import * as petController from '../controllers/pet.controller';

const router = Router();

// TODO: Register all five routes.
router.get('/',petController.getAll);

export default router;