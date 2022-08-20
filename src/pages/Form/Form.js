import BillingInfo from '../../components/billingInfo/BillingInfo';
import ConfirmPayment from '../../components/ConfirmPayment/ConfirmPayment';
import FormProgress from '../../components/formProgress/FormProgress';
import PersonalInfo from '../../components/personalInfo/PersonalInfo';
import style from './form.module.css';

const Form = ({ switchPage, setSwitchPage }) => {
  const handleClick = () => {
    if (switchPage < 4) {
      setSwitchPage((prev) => prev + 1);
    }
    console.log(switchPage);
  };

  const handleCancelPayment = () => {
    setSwitchPage(1);
  };

  return (
    <form className={style.form_container}>
      <h3>Complete your Purchase</h3>
      <FormProgress switchPage={switchPage} />

      {switchPage === 1 && <PersonalInfo />}

      {switchPage === 2 && <BillingInfo />}

      {switchPage === 3 && <ConfirmPayment />}

      <div className={style.btn_wrapper}>
        <button type="button" onClick={handleClick}>
          Next
        </button>
        <button type="button" onClick={handleCancelPayment}>
          Cancel Payment
        </button>
      </div>
    </form>
  );
};

export default Form;
