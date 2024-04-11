import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
   * 
   * @param {number} amount 
   * @param {number} conversionRate 
   * @returns number
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
        throw new TypeError('amount must be a number')
    }

    if (typeof conversionRate !== 'number') {
        throw new TypeError('conversionRate must be a number')
    }

    return amount * conversionRate;
  }
}
