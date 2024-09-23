import { Button } from "antd";

function CustomButton(props) {
    return (
        <Button type={props.type || "default"} >
            {props.text || "Button"}
        </Button>
    );
}

export default CustomButton;
