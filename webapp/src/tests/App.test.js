import { render, screen } from '@testing-library/react';

import NavBar from '../components/NavBar';
import AllGradesContainer from '../components/Grades/AllGradesContainer';
import CourseHWScores from '../components/Grades/CourseHWScores';


// Get mock data for API simulation
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// Renders NavBar Component
describe('Testing <NavBar /> Component', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <NavBar />
    </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})

// Renders AllGradesContainer Component
describe('Testing <AllGradesContainer /> Component', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <AllGradesContainer />
    </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})

// Renders CourseHWScores Component
describe('Testing <CourseHWScores /> Component', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <CourseHWScores />
    </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})




