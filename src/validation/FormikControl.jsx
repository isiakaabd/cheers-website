import Input from "./Input";
import SelectComponent from "./Select";
import PropTypes from "prop-types";
import CheckBox from "./Checkboxs";
import TextArea from "./Textarea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "select":
      return <SelectComponent {...rest} />;

    case "checkbox":
      return <CheckBox {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    default:
      return null;
  }
};
FormikControl.propTypes = {
  control: PropTypes.string,
};
FormikControl.defaultProps = {
  control: "input",
};
export default FormikControl;
