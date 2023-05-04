import styles from "@/styles/FirmFacts.module.scss";
import FirmFactCard from "./FirmFactCard";
import PropTypes from "prop-types";

const FirmFacts = ({ data }) => {
  return (
    <div className={styles.firmFactGrid}>
      {data.map((item, index) => {
        return (
          <FirmFactCard
            key={index}
            text={item.title}
            buttonVariant={item.buttonVariant}
            variant={item.cardVariant}
            disabled={item.disabled}
          />
        );
      })}
    </div>
  );
};

FirmFacts.propTypes = {
  data: PropTypes.isRequired,
};

export default FirmFacts;
