import style from './formProgress.module.css';

const FormProgress = ({ switchPage }) => {
  return (
    <div className={style.form_progress_container}>
      <h5 className={switchPage === 1 && style.active}>Personal Info</h5>
      <h5 className={switchPage === 2 && style.active}>Billing Info</h5>
      <h5 className={switchPage === 3 && style.active}>Confirm Payment</h5>
    </div>
  );
};

export default FormProgress;
