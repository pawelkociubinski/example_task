import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../index';

describe('<Pagination />', () => {
  it('renders correctly', () => {
    const mockedFn = jest.fn();
    const currentPage = 0;
    const repositoriesLength = 10;
    const itemsPerPage = 2;

    const component = renderer.create(<Pagination
      changePage={mockedFn}
      currentPage={currentPage}
      itemsLength={repositoriesLength}
      itemsPerPage={itemsPerPage}
      nextPage={mockedFn}
      previousPage={mockedFn}
    />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
