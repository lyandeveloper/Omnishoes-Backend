import { Transaction } from '../../domain/entities/Transaction';
import { AddTransaction, AddTransactionModel } from '../../domain/usecases/AddTransaction';
import { AddTransactionProtocol } from '../protocols/add-transaction-protocol';

export class AddTransactionRepo implements AddTransaction {
    private readonly addTransaction: AddTransactionProtocol;

    constructor(addTransaction: AddTransactionProtocol) {
      this.addTransaction = addTransaction;
    }

    async add(transaction: AddTransactionModel): Promise<Transaction> {
      const transactionData = await this.addTransaction.add(transaction);

      return transactionData;
    }
}
