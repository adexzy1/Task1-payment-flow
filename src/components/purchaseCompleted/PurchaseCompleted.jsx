import Check from '../../assets/icons/Check';
import style from './purchaseCompleted.module.css';

const PurchaseCompleted = ({ setSwitchPage }) => {
  const handeClick = () => {
    setSwitchPage(1);
  };

  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <div className={style.check_icon}>
          <Check />
        </div>

        <div className={style.details_wrapper}>
          <h2>Purchase Completed</h2>
          <p>
            Please check your email for details concerning <br />
            this transaction
          </p>

          <button onClick={handeClick}>Return Home</button>
        </div>
      </div>
    </section>
  );
};

export default PurchaseCompleted;
