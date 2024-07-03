export class Customer {
  id: string;

  name: string;

  lastName: string;

  email: string;

  phone: string;

  constructor(data?: Partial<Customer>) {
    this.assign(data);
  }

  assign(data?: Partial<Customer>): void {
    if (data) {
      this.id = data.id ?? this.id;
      this.name = data.name ?? this.name;
      this.lastName = data.lastName ?? this.lastName;
      this.email = data.email ?? this.email;
      this.phone = data.phone ?? this.phone;
    }
  }

  setField<K extends keyof this>(fieldName: K, value: this[K]): void {
    this[fieldName] = value;
  }
}
