import { Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeTransaction } from '../factories/transaction';

export default (router: Router): void => {
  router.post('/add-transaction', adaptRoute(makeTransaction()));
};
