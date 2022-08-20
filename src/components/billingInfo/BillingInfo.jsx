import React from 'react';
import Input from '../input/Input';
import Select from '../select/Select';
import style from './billingInfo.module.css';

const BillingInfo = () => {
  return (
    <div className={style.container}>
      <Input
        type={'text'}
        name={'nameOnCard'}
        label={'Name on Card'}
        placeholder={'Opara Linus Ahmed'}
        required
      />

      <div className={style.select_wrapper}>
        <Select label={'Card Type'} required>
          <option value="visa"> Visa</option>
          <option value="verve"> Verve</option>
          <option value="mastercard"> Mastercard</option>
        </Select>
      </div>

      <section className={style.card_details_wrapper}>
        <Input
          type={'number'}
          label={'Card details'}
          placeholder={'44960 44960 44960 44960'}
          required
          name={'cardDetails'}
        />

        <Input
          type={'text'}
          label={'Expiry date'}
          placeholder={'04 / 23'}
          required
          name={'expiryDate'}
        />

        <Input
          type={'text'}
          label={'CVV'}
          placeholder={'923'}
          required
          name={'cvv'}
        />
      </section>
    </div>
  );
};

export default BillingInfo;
