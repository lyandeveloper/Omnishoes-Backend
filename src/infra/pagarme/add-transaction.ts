import pagarme from 'pagarme';
import { AddTransactionProtocol } from '../../data/protocols/add-transaction-protocol';
import { Transaction } from '../../domain/entities/Transaction';
import { AddTransactionModel } from '../../domain/usecases/AddTransaction';

export class AddTransaction implements AddTransactionProtocol {
  async add(transactionData: AddTransactionModel): Promise<Transaction> {
    const transaction = await pagarme.client.connect({ api_key: 'ak_test_9FLvBuFde9GMPWWgoel02wvCGljCtB' }).then((client) => client.transactions.create(transactionData));

    return transaction;
  }
}
