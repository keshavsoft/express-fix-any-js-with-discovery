import express from 'express';

import { router as routerFromv3 } from './v3/routes.js';

const router = express.Router()

router.use("/v3", routerFromv3);

export { router };