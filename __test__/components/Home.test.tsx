import { shallow } from 'enzyme';
import React from 'react';
import Home from "../../src/ts/components/Home";

describe('<Home />', () => {
  test('Element includes text prop', () => {
    const text = "test";
    const wrapper = shallow(<Home text={text} />);
    expect(wrapper.find("#home")).toHaveHTML(`<div id="home">${text}</div>`);
  });
});
