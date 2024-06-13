import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: '0.375rem',
        border: "none",
        boxShadow: '2px 6px 15px 0 rgba(0, 0, 0, 0.25)',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#46620B' : 'white',
        color: state.isFocused ? 'white' : 'black',
        '&:hover': {
            backgroundColor: '#46620B',
            color: 'white'
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'black',
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        padding: '0', // Remove any padding
    }),
    indicatorSeparator: () => ({
        display: 'none', // Hide the separator
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: state.isHovered ? '#46620B' : 'grey',
        '&:hover': {
            color: '#46620B',
        },
        transition: 'color 0.2s ease',
    }),
};

const CustomSelect = ({ goal, setGoal, options }) => {
    const handleChange = (selectedOption) => {
        setGoal(selectedOption.value);
    };

    const formattedOptions = options.map((option) => ({ value: option.value, label: option.name }));

    return (
        <Select
            value={formattedOptions.find(option => option.value === goal)}
            onChange={handleChange}
            options={formattedOptions}
            styles={customStyles}
            className="w-[289px] h-[41px]"
        />
    );
};

export default CustomSelect;