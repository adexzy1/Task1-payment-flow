import Input from '../input/Input';
import Select from '../select/Select';
import style from './personalInfo.module.css';

const PersonalInfo = () => {
  return (
    <div className={style.container}>
      <Input
        type={'text'}
        name={'name'}
        placeholder={'Opara Linus Ahmed'}
        label={'Name'}
      />
      <Input
        type={'email'}
        name={'email'}
        placeholder={'OparaLinusAhmed@devmail.com'}
        label={'Email Address'}
        tag={'The purchase reciept would be sent to this address'}
        required
      />
      <Input
        type={'text'}
        name={'Address1'}
        placeholder={'The address of the user goes here'}
        label={'Address 1'}
      />
      <Input
        type={'text'}
        name={'Address2'}
        placeholder={'and here'}
        label={'Address 2'}
      />

      <div className={style.select_container}>
        <Input
          type={'text'}
          name={'name'}
          placeholder={'Opara Linus Ahmed'}
          label={'Local Government'}
        />

        <Select label={'State'}>
          <option value="lagos">Lagos</option>
          <option value="lagos">Enugu</option>
          <option value="lagos">Abuja</option>
        </Select>
      </div>
    </div>
  );
};

export default PersonalInfo;
