import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BooksPagination from '../BooksPagination';

describe('Testing BooksPagination component', () => {
  const props = {
    onPaginate: jest.fn(),
    pages: [1, 2, 3],
    currentPage: 1,
  };

  it('renders correctly', () => {
    const wrapper = shallow(<BooksPagination {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('BooksPagination prev will not render', () => {
    const wrapper = mount(<BooksPagination {...props} />);
    wrapper.find('#paginate-prev').first().simulate('click');
    expect(props.onPaginate).toHaveBeenCalledTimes(0);
  });

  it('BooksPagination prev will render', () => {
    const wrapper = mount(<BooksPagination {...props} />);
    wrapper.setProps({ currentPage: 2 });
    wrapper.find('#paginate-prev').first().simulate('click');
    expect(props.onPaginate).toHaveBeenCalledTimes(1);
  });

  it('BooksPagination next will render', () => {
    const wrapper = mount(<BooksPagination {...props} />);
    wrapper.find('#paginate-next').first().simulate('click');
    expect(props.onPaginate).toHaveBeenCalledTimes(1);
  });

  it('BooksPagination next will not render', () => {
    const wrapper = mount(<BooksPagination {...props} />);
    wrapper.setProps({ currentPage: 3 });
    wrapper.find('#paginate-next').first().simulate('click');
    expect(props.onPaginate).toHaveBeenCalledTimes(0);
  });
});
