import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header isActive={true} text="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
    ReactDOM.render(<Header isActive={false} text="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('renders correctly', () => {
    it('active', () => {
      const tree = renderer.create(<Header isActive={true} text="test" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('inactive', () => {
      const tree = renderer.create(<Header isActive={false} text="test" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
