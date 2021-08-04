import { AddTransaction } from '../../../domain/usecases/AddTransaction';
import { MissingParamError } from '../../errors';
import { ServerError } from '../../errors/server-error';
import { badRequest, serverError } from '../../helper/http-helper';
import { Controller } from '../../protocols/controller';
import { HttpRequest, HttpResponse } from '../../protocols/http';

export class AddTransactionController implements Controller {
  private readonly addTransaction: AddTransaction;

  constructor(addTransaction: AddTransaction) {
    this.addTransaction = addTransaction;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = [
        'amount',
        'card_number',
        'card_cvv',
        'card_expiration_date',
        'card_holder_name',
        'customer',
        'billing',
        'shipping',
        'items',
      ];

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const {
        amount,
        card_number,
        card_cvv,
        card_expiration_date,
        card_holder_name,
        customer,
        billing,
        shipping,
        item,
      } = httpRequest.body;

      await this.addTransaction.add({
        amount,
        card_number,
        card_cvv,
        card_expiration_date,
        card_holder_name,
        customer,
        billing,
        shipping,
        item,
      });
    } catch (error) {
      return serverError(new ServerError());
    }
  }
}
