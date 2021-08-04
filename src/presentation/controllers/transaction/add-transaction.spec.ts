import { Transaction } from '../../../domain/entities/Transaction';
import { AddTransaction, AddTransactionModel } from '../../../domain/usecases/AddTransaction';
import { MissingParamError } from '../../errors';
import { ServerError } from '../../errors/server-error';
import { badRequest, serverError } from '../../helper/http-helper';
import { AddTransactionController } from './add-transaction';

const makeTransaction = () => {
  class AddTransactionStub implements AddTransaction {
    async add(transaction: AddTransactionModel): Promise<Transaction> {
      const fakeResponse = {
        object: 'transaction',
        status: 'paid',
        refuse_reason: null,
        status_reason: 'acquirer',
        acquirer_response_code: '0000',
        acquirer_name: 'pagarme',
        acquirer_id: '5969170917bce0470c8bf099',
        authorization_code: '65208',
        soft_descriptor: null,
        tid: 1830855,
        nsu: 1830855,
        date_created: '2017-08-14T20:35:46.046Z',
        date_updated: '2017-08-14T20:35:46.455Z',
        amount: 10000,
        authorized_amount: 10000,
        paid_amount: 10000,
        refunded_amount: 0,
        installments: 1,
        id: 1830855,
        cost: 50,
        card_holder_name: 'Morpheus Fishburne',
        card_last_digits: '1111',
        card_first_digits: '411111',
        card_brand: 'visa',
        card_pin_mode: null,
        postback_url: null,
        payment_method: 'credit_card',
        capture_method: 'ecommerce',
        antifraud_score: null,
        boleto_url: null,
        boleto_barcode: null,
        boleto_expiration_date: null,
        referer: 'api_key',
        ip: '10.2.11.17',
        subscription_id: null,
        phone: null,
        address: null,
        customer: {
          object: 'customer',
          id: 233238,
          external_id: '#3311',
          type: 'individual',
          country: 'br',
          document_number: null,
          document_type: 'cpf',
          name: 'Morpheus Fishburne',
          email: 'mopheus@nabucodonozor.com',
          phone_numbers: [
            '+5511999998888',
            '+5511888889999',
          ],
          born_at: null,
          birthday: '1965-01-01',
          gender: null,
          date_created: '2017-08-14T20:35:45.963Z',
          documents: [
            {
              object: 'document',
              id: 'doc_cj6cmcm2l01z5696dyamemdnf',
              type: 'cpf',
              number: '30621143049',
            },
          ],
        },
        billing: {
          address: {
            object: 'address',
            street: 'Rua Matrix',
            complementary: null,
            street_number: '9999',
            neighborhood: 'Rio Cotia',
            city: 'Cotia',
            state: 'sp',
            zipcode: '06714360',
            country: 'br',
            id: 145818,
          },
          object: 'billing',
          id: 30,
          name: 'Trinity Moss',
        },
        shipping: {
          address: {
            object: 'address',
            street: 'Rua Matrix',
            complementary: null,
            street_number: '9999',
            neighborhood: 'Rio Cotia',
            city: 'Cotia',
            state: 'sp',
            zipcode: '06714360',
            country: 'br',
            id: 145819,
          },
          object: 'shipping',
          id: 25,
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
        },
        items: [
          {
            object: 'item',
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            category: null,
            tangible: true,
            venue: null,
            date: null,
          },
          {
            object: 'item',
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            category: null,
            tangible: true,
            venue: null,
            date: null,
          },
        ],
        card: {
          object: 'card',
          id: 'card_cj6cmcm4301z6696dt3wypskk',
          date_created: '2017-08-14T20:35:46.036Z',
          date_updated: '2017-08-14T20:35:46.524Z',
          brand: 'visa',
          holder_name: 'Morpheus Fishburne',
          first_digits: '411111',
          last_digits: '1111',
          country: 'UNITED STATES',
          fingerprint: '3ace8040fba3f5c3a0690ea7964ea87d97123437',
          valid: true,
          expiration_date: '0922',
        },
        split_rules: null,
        metadata: {},
        antifraud_metadata: {},
        reference_key: null,
      };

      return new Promise((resolve) => resolve(fakeResponse));
    }
  }

  return new AddTransactionStub();
};

const makeSut = () => {
  const addTransactionStub = makeTransaction();
  const sut = new AddTransactionController(addTransactionStub);

  return { sut, addTransactionStub };
};

describe('Add Transaction', () => {
  test('Should return 400 if amount field is missing', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        card_number: '4111111111111111',
        card_cvv: '123',
        card_expiration_date: '0922',
        card_holder_name: 'Morpheus Fishburne',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
          birthday: '1965-01-01',
        },
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        shipping: {
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [
          {
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
          {
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
        ],
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('amount')));
  });

  test('Should return 400 if card_number field is missing', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        amount: 21000,
        card_cvv: '123',
        card_expiration_date: '0922',
        card_holder_name: 'Morpheus Fishburne',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
          birthday: '1965-01-01',
        },
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        shipping: {
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [
          {
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
          {
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
        ],
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('card_number')));
  });

  test('Should return 400 if card_cvv field is missing', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        amount: 21000,
        card_number: '4111111111111111',
        card_expiration_date: '0922',
        card_holder_name: 'Morpheus Fishburne',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
          birthday: '1965-01-01',
        },
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        shipping: {
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [
          {
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
          {
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
        ],
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('card_cvv')));
  });

  test('Should return 400 if card_expiration_date field is missing', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        amount: 21000,
        card_number: '4111111111111111',
        card_cvv: '123',
        card_holder_name: 'Morpheus Fishburne',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
          birthday: '1965-01-01',
        },
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        shipping: {
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [
          {
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
          {
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
        ],
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('card_expiration_date')));
  });

  test('Should return 400 if card_holder_name field is missing', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        amount: 21000,
        card_number: '4111111111111111',
        card_cvv: '123',
        card_expiration_date: '0922',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
          birthday: '1965-01-01',
        },
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        shipping: {
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [
          {
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
          {
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
        ],
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('card_holder_name')));
  });

  test('Should return 400 if client field is missing', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        amount: 21000,
        card_number: '4111111111111111',
        card_cvv: '123',
        card_expiration_date: '0922',
        card_holder_name: 'Morpheus Fishburne',
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        shipping: {
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [
          {
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
          {
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
        ],
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('customer')));
  });

  test('Should return 400 if billing field is missing', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        amount: 21000,
        card_number: '4111111111111111',
        card_cvv: '123',
        card_expiration_date: '0922',
        card_holder_name: 'Morpheus Fishburne',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
          birthday: '1965-01-01',
        },
        shipping: {
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [
          {
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
          {
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
        ],
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('billing')));
  });

  test('Should return 400 if shipping field is missing', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        amount: 21000,
        card_number: '4111111111111111',
        card_cvv: '123',
        card_expiration_date: '0922',
        card_holder_name: 'Morpheus Fishburne',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
          birthday: '1965-01-01',
        },
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [
          {
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
          {
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
        ],
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('shipping')));
  });

  test('Should return 400 if amount field is missing', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        amount: 21000,
        card_number: '4111111111111111',
        card_cvv: '123',
        card_expiration_date: '0922',
        card_holder_name: 'Morpheus Fishburne',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
          birthday: '1965-01-01',
        },
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        shipping: {
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('items')));
  });

  test('Should return 500 if AddTransaction throws', async () => {
    const { sut, addTransactionStub } = makeSut();
    jest
      .spyOn(addTransactionStub, 'add')
      .mockImplementationOnce(
        async () => new Promise((resolve, reject) => reject(new Error())),
      );
    const httpRequest = {
      body: {
        amount: 21000,
        card_number: '4111111111111111',
        card_cvv: '123',
        card_expiration_date: '0922',
        card_holder_name: 'Morpheus Fishburne',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
          birthday: '1965-01-01',
        },
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        shipping: {
          name: 'Neo Reeves',
          fee: 1000,
          delivery_date: '2000-12-21',
          expedited: true,
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [
          {
            id: 'r123',
            title: 'Red pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
          {
            id: 'b123',
            title: 'Blue pill',
            unit_price: 10000,
            quantity: 1,
            tangible: true,
          },
        ],
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(serverError(new ServerError()));
  });
});
