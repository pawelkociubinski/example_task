/* @flow */
// Dependencies
import React, { Component } from 'react';
import { isEqual } from 'lodash';
// Types
import type { Option } from './types';
// Custom
import InputField from '../InputField';
import Options from './Options';
import { Container, IconWrapper } from './styles';

type Props = {|
  +selected: Option,
  +label: string,
  +options: Array<Option>,
  +handleSelect: (option: Option) => void,
|}

type State = {
  isOpen: boolean,
}

class Select extends Component<Props, State> {
  static defaultProps = {
    selected: null,
  };

  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this._handleMouseClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this._handleMouseClickOutside);
  }

  node: HTMLDivElement

  nodeRef = (node: HTMLDivElement): void => { this.node = node; };

  _handleMouseClickOutside = (event: any): void => {
    if (this.node.contains(event.target)) { return; }

    this.setState({ isOpen: false });
  }

  _handleSwitch = (): void => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }

  _isSelected = (option: Option): boolean => isEqual(this.props.selected, option)

  render() {
    const {
      handleSelect, options, selected, label,
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Container
        innerRef={this.nodeRef}
        onClick={this._handleSwitch}
      >
        <InputField
          label={label}
          readOnly
          value={selected.label}
          icon={
            <IconWrapper
              icon="arrowTop"
              isOpen={isOpen}
              size={15}
            />
          }
        />
        {isOpen &&
          <Options
            handleSelect={handleSelect}
            isSelected={this._isSelected}
            options={options}
          />
        }
      </Container>
    );
  }
}

export default Select;
