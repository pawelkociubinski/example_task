/* @flow */
// Dependencies
import React from 'react';
// Types
import type { Option as OptionType } from './types';
// Custom
import Option from './Option';
import { Dropdown } from './styles';

type Props = {
  options: Array<OptionType>,
  isSelected: (option: OptionType) => boolean,
  handleSelect: (option: OptionType) => void;
}

const Options = (props: Props) => {
  const { options, handleSelect } = props;
  return (
    <Dropdown>
      {options.map((option) => {
        const isSelected = props.isSelected(option);
        return (
          <Option
            handleSelect={handleSelect}
            isSelected={isSelected}
            key={option.value}
            option={option}
          />
        );
      })}
    </Dropdown>
  );
};

export default Options;
