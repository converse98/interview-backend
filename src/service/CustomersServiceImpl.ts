import { CustomersService } from './CustomersService';
import { CustomersRepository } from '../repository/CustomersRepository';
import { Customer } from '../domain/Customer';

export class CustomersServiceImpl implements CustomersService {
  constructor(private repository: CustomersRepository) {}

  async findByFilter(customer: Customer): Promise<Customer[]> {
    return this.repository.findByFilter(customer);
  }
}
