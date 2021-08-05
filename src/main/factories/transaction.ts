import { AddTransactionRepo } from '../../data/usecases/add-transaction-repo';
import { AddTransaction } from '../../infra/pagarme/add-transaction';
import { AddTransactionController } from '../../presentation/controllers/transaction/add-transaction';
import { Controller } from '../../presentation/protocols/controller';

export const makeTransaction = (): Controller => {
  const addTransaction = new AddTransaction();
  const addTransactionRepo = new AddTransactionRepo(addTransaction);
  return new AddTransactionController(addTransactionRepo);
};
