import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

it("should be in the document", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument;
});

it("should be able to type text", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "hgfj33" } });
    expect(inputElement.value).toBe("hgfj33");
});

it("should add a new task when clicked", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "hgfj33" } });
    const submitButtonElement = screen.getByText("Add");
    fireEvent.click(submitButtonElement);
    const newTaskElement = screen.getByText("hgfj33");
    expect(newTaskElement).toBeInTheDocument;
});

it("should remove task when clicked", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "hgfj33" } });
    const submitButtonElement = screen.getByText("Add");
    fireEvent.click(submitButtonElement);
    const newTaskElement = screen.getByText("hgfj33");
    const newTaskRemoveButtonElement = screen.getByTestId("remove");
    fireEvent.click(newTaskRemoveButtonElement);
    expect(newTaskElement).not.toBeInTheDocument;
});
