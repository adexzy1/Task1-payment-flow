import style from './input.module.css';

const Input = ({ name, type, placeholder, label, tag, required }) => {
  return (
    <div className={style.container}>
      <label htmlFor={name}>
        {label}
        {required && <sup>*</sup>}
      </label>
      {tag && <p>{tag}</p>}
      <input type={type} id={name} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
