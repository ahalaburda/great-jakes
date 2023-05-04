import PropTypes from "prop-types";
import TextTruncate from "react-text-truncate";
import SearchIcon from "@/images/SearchIcon";
import styles from "@/styles/Button.module.scss";

const Button = ({ text, variant = "default", disabled = false }) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${
    disabled ? styles.disabled : ""
  }`;
  return (
    <div className={buttonClass} disabled={disabled}>
      {variant !== "default" && (
        <span style={{ margin: "10px" }}>
          <SearchIcon />
        </span>
      )}
      <TextTruncate
        line={variant === "default" ? 1 : 2}
        element="span"
        truncateText={variant === "default" ? "" : "..."}
        text={text}
      />
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
