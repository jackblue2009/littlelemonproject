import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import BookingPage from "./components/BookingPage";

// test("Adds one", () => {
//   // render the App component
//   render(<App />);

//   // save the heading in a variable
//   const heading = screen.getByTestId("currentNumber");

//   // save the button in a variable
//   const btn = screen.getByTestId("addOne");

//   // click the btn
//   fireEvent.click(btn);

//   // test assumption
//   expect(heading).toHaveTextContent("2");
// });

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book A Table");
  expect(headingElement).toBeInTheDocument();
});