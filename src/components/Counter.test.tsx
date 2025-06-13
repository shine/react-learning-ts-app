// src/components/Counter.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest'; // Import 'vi' for mocking
import Counter from './Counter';

describe('Controlled Counter Component', () => {

  it('should render with the initial count provided as a prop', () => {
    // Arrange: Provide the necessary props. The callbacks can be empty mock functions.
    const initialCount = 5;
    const mockOnIncrement = vi.fn();
    const mockOnDecrement = vi.fn();

    // Act: Render the component with the required props
    render(
      <Counter
        count={initialCount}
        onIncrement={mockOnIncrement}
        onDecrement={mockOnDecrement}
      />
    );

    // Assert: Check if the initial count is rendered correctly
    const countElement = screen.getByText(`Current count: ${initialCount}`);
    expect(countElement).toBeInTheDocument();
  });

  it('should call the onIncrement callback when the increment button is clicked', async () => {
    const user = userEvent.setup();
    
    // Arrange
    const mockOnIncrement = vi.fn(); // Create a mock function for the callback
    const mockOnDecrement = vi.fn();

    render(
      <Counter
        count={0}
        onIncrement={mockOnIncrement}
        onDecrement={mockOnDecrement}
      />
    );

    // Act
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await user.click(incrementButton);

    // Assert: Check if our mock function was called
    expect(mockOnIncrement).toHaveBeenCalledTimes(1);
    // We can also assert that the other callback was NOT called
    expect(mockOnDecrement).not.toHaveBeenCalled();
  });

  it('should call the onDecrement callback when the decrement button is clicked', async () => {
    const user = userEvent.setup();
    
    // Arrange
    const mockOnIncrement = vi.fn();
    const mockOnDecrement = vi.fn();

    render(
      <Counter
        count={0}
        onIncrement={mockOnIncrement}
        onDecrement={mockOnDecrement}
      />
    );

    // Act
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    await user.click(decrementButton);

    // Assert
    expect(mockOnDecrement).toHaveBeenCalledTimes(1);
    expect(mockOnIncrement).not.toHaveBeenCalled();
  });

  it('should display the new count when its props are updated', () => {
    // Arrange: Render with an initial count
    const initialCount = 10;
    // The `render` function from RTL returns helpers, including one to `rerender`
    const { rerender } = render(
      <Counter count={initialCount} onIncrement={vi.fn()} onDecrement={vi.fn()} />
    );
    
    // Assert initial state
    expect(screen.getByText(`Current count: ${initialCount}`)).toBeInTheDocument();

    // Act: Re-render the same component with new props, simulating a parent state change
    const newCount = 15;
    rerender(
      <Counter count={newCount} onIncrement={vi.fn()} onDecrement={vi.fn()} />
    );

    // Assert: Check that the component now displays the new count
    expect(screen.getByText(`Current count: ${newCount}`)).toBeInTheDocument();
    // Also assert the old count is no longer present
    expect(screen.queryByText(`Current count: ${initialCount}`)).not.toBeInTheDocument();
  });
});