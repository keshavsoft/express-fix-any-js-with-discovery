import express from 'express';

import { router as routerFromdayBook } from './dayBook/end-points.js';
import { router as routerFromtable1 } from './table1/end-points.js';
import { router as routerFrompurchases } from './purchases/end-points.js';
import { router as routerFromallLedgerEntries } from './allLedgerEntries/end-points.js';
import { router as routerFromStockItems } from './StockItems/end-points.js';

import { router as routerFromledger } from './ledger/end-points.js';

import { router as routerFrompurExpVouchers } from "./purExpVouchers/end-points.js";

const router = express.Router()

router.use("/purExpVouchers", routerFrompurExpVouchers);;
router.use("/table1", routerFromtable1);
router.use("/purchases", routerFrompurchases);
router.use("/allLedgerEntries", routerFromallLedgerEntries);
router.use("/StockItems", routerFromStockItems);
router.use('/ledger', routerFromledger);
router.use('/dayBook', routerFromdayBook);

export { router };