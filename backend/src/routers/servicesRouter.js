import express from 'express';
import {
  getServices,
  getActionsForService,
  getTriggerForService,
} from '../controllers/serviceControllers';

const router = new express.Router();

router.get('/services', getServices);

router.get('/actions/:service', getActionsForService);

router.get('/triggers/:service', getTriggerForService);

export default router;
