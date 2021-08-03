import { MissingParamError } from '../../errors';
import { badRequest } from '../../helper/http-helper';
import { AddTransactionController } from './add-transaction';

const makeSut = () => {
  const sut = new AddTransactionController();

  return { sut };
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
});
