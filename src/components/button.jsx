import { Button  } from "antd";
  
const CustomButton = ({ text, type, onClick }) => {
    return (
      <Button onClick={onClick} className={`btn-${type}`}>
        {text}
      </Button>
    );
  };
  
  export default CustomButton;
  