import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

const Filter = ({ value, onChange }) => (
  <label className={styles.filter}>
    <p className={styles.text}>Search Contact</p>
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;
