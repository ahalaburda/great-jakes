import PropTypes from "prop-types";
import styles from "@/styles/FirmFactCard.module.scss";
import Button from "./Button";

const FirmFactCard = ({
  text,
  variant = "default",
  buttonVariant,
  disabled,
}) => {
  return (
    <div
      className={`${styles.firmFactCard} ${styles[variant]} ${
        disabled ? styles.disabled : ""
      }`}
    >
      <div className={styles.contentWrapper}>
        <Button text={text} variant={buttonVariant} disabled={disabled} />
      </div>
    </div>
  );
};

FirmFactCard.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  buttonVariant: PropTypes.string,
  disabled: PropTypes.bool,
};

export default FirmFactCard;
