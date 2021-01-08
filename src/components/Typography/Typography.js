import { Typography } from "antd";
import clsx from "clsx";
import PropTypes from "prop-types";

import classes from "./Typography.module.scss";

const TypographyComponent = ({ label, size, danger, success, warning }) => {
  const sizeClass =
    size === "large"
      ? classes.textLarge
      : size === "small"
      ? classes.textSmall
      : classes.textMedium;
  return (
    <Typography
      className={clsx(
        classes.text,
        danger && classes.textDanger,
        success && classes.textSuccess,
        warning && classes.textWarning,
        sizeClass
      )}
    >
      {label}
    </Typography>
  );
};

TypographyComponent.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
};

TypographyComponent.defaultProps = {
  size: "medium",
};

export default TypographyComponent;
