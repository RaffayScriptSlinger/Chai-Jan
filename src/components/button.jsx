import { Button  } from "antd";
  
const CustomButton = ({ text, type, onClick }) => {
    return (
      <Button onClick={onClick} className={`btn-${type} bg-red-600 text-white`}>
        {text}
      </Button>
    );
  };
  
  export default CustomButton;
  