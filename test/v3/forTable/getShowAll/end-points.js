import express from 'express';

import funcFromshowAll from './showAll/controller.js';

const tableName = "tab1111111111.json";
const tablePath = "Data/tab1111111111.json";
const configPath = "Config/Schemas/tab1111111111.json";

const router = express.Router();

router.get('/showAll', (req, res) => funcFromshowAll({ req, res, inTablePath: tablePath }));

export { router };