import { Transaction } from '../../domain/entities/Transaction';
import { AddTransactionModel } from '../../domain/usecases/AddTransaction';

export interface AddTransactionProtocol {
    add(transactionData: AddTransactionModel): Promise<Transaction>;
}
