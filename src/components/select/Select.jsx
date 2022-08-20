import ArrowDown from '../../assets/icons/ArrowDown';
import style from './select.module.css';

const Select = ({ children, label, required }) => {
  return (
    <section className={style.select_input_wrapper}>
      <label>
        {label} {required && <sup>*</sup>}
      </label>
      <select>{children}</select>
      <ArrowDown />
    </section>
  );
};

export default Select;
