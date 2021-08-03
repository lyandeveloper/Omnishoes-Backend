import { MissingParamError } from '../../errors';
import { badRequest } from '../../helper/http-helper';
import { Controller } from '../../protocols/controller';
import { HttpRequest, HttpResponse } from '../../protocols/http';

export class AddTransactionController implements Controller {
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
    } catch (error) {
      console.log(error);
    }
  }
}
