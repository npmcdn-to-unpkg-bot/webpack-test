import { Address } from './address'

export class Person {
  public constructor(
    public name: string,
    public address: Address,
    public phone: string,
    birthday: string
  ) {}
}
