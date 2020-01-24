import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import Button from './components/Button/Button'


let container = null;
beforeEach(() => {
  
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
  container = null;
});

it("contains string when clicked", () => {
  const onClick = jest.fn();
  act(() => {
    render(<Button onClick={onClick} />, container);
  });

  // get ahold of the button element, and trigger some clicks on it
  const element = document.querySelector('Button');
  expect(element).toHaveTextContent('Text');

  act(() => {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(0);
  expect(element).toHaveTextContent('Toggle');

  act(() => {
    for (let i = 0; i < 5; i++) {
      element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onClick).toHaveBeenCalledTimes(0);
  expect(element).toHaveTextContent('Toggle Text');
});
