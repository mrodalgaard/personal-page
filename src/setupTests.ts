// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

// Mock IntersectionObserver used by LazyImage
mockAllIsIntersecting(true);
