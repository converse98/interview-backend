import axios from 'axios';
import { CustomersRepository } from './CustomersRepository';
import { Customer } from '../domain/Customer';

type RandomUser = {
  id: {
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  phone: string;
};

export class CustomersRepositoryImpl implements CustomersRepository {
  async findByFilter(customer: Customer): Promise<Customer[]> {
    try {
      const result = await axios.get(
        'https://randomuser.me/api/?results=100&inc=id,name,email,phone&noinfo'
      );
      if (!result.data.results) {
        return [];
      }
      return result.data.results
        .filter((item: RandomUser) =>
          item.name.first.toLowerCase().startsWith(customer.name.toLowerCase())
        )
        .map((item: RandomUser) => {
          customer.setField('id', item.id.value);
          customer.setField('name', item.name.first);
          customer.setField('lastName', item.name.last);
          customer.setField('phone', item.phone);
          customer.setField(
            'email',
            `${item.name.first.charAt(0)}${item.name.last}@miblum.com`
          );
          return customer;
        });
    } catch (err) {
      console.error('Error en findByFilter[repository]: ', err);
      throw err;
    }
  }
}
