import { Select } from 'antd';
import BackgroundSelect from "../../wrappers/Select/Background";
import ColoredOption from "../../wrappers/Select/Option";

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const SelectItem = () => {
    return <>
        <BackgroundSelect defaultValue="lucy" onChange={handleChange}>
            <ColoredOption value="jack">Jack</ColoredOption>
            <ColoredOption value="lucy">Lucy</ColoredOption>
            <ColoredOption value="disabled" disabled>
                Disabled
            </ColoredOption>
        </BackgroundSelect>
    </>
}

export default SelectItem
