import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestInput from './Test'

Enzyme.configure({ adapter: new Adapter() });



it('renders correctly', () => {
  const wrapper = shallow(<TestInput/>)
  expect(wrapper).toMatchSnapshot()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
