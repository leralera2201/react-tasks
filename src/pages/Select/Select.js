import Select from "@components/Select";

import SelectSize from "../../wrappers/Select/SelectSize";
import ColoredOption from "../../wrappers/Select/Option";

const SelectPage = () => {
    return (
        <>
            <div>
                <Select />
            </div>
            <br/>
            <div>
                <Select wrapper={SelectSize} large/>
            </div>
            <br/>
            <div>
                <Select wrapper={SelectSize} medium optionWrapper={ColoredOption}/>
            </div>
        </>
    );
};

export default SelectPage;