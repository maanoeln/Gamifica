// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

export const mockHistory = {
  replace: jest.fn(),
  push: jest.fn(),
  goBack: jest.fn(),
};

jest.mock(`react-router`, () => ({
  ...jest.requireActual(`react-router`),
  useHistory: () => mockHistory,
}));

jest.mock(`react-router-dom`, () => ({
  ...jest.requireActual(`react-router-dom`),
  useHistory: () => mockHistory,
}));
