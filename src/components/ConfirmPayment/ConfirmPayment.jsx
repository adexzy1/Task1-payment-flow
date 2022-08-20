import style from './confirmPayment.module.css';

const ConfirmPayment = () => {
  return (
    <section className={style.container}>
      <div className={style.header_wrapper}>
        <p>Item Name</p>
        <p>₦ Price</p>
      </div>

      <div className={style.shipping_details}>
        <div>
          <p>Data science and usability</p>
          <p>50,000.00</p>
        </div>

        <div>
          <p>Shipping</p>
          <p>0.00</p>
        </div>
      </div>

      <div className={style.total}>
        <p>Total</p>
        <p>50,000.00</p>
      </div>
    </section>
  );
};

export default ConfirmPayment;
