import express from 'express';

import { router as routerFromtable1 } from './table1/routes.js';

const router = express.Router()

router.use("/table1", routerFromtable1);

export { router };