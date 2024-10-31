import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useDocumentTitle from './';

// Mock component for testing
function TestComponent({ title }: { title: string }) {
  useDocumentTitle(title);
  return <div>{title}</div>;
}

describe('useDocumentTitle hook', () => {
  it('should set document title based on the provided title', () => {
    const testTitle = 'Place an Order';

    render(
      <MemoryRouter>
        <TestComponent title={testTitle} />
      </MemoryRouter>,
    );

    // Assert that the document title was set correctly
    expect(document.title).toBe(testTitle);
  });

  it('should update document title when location changes', () => {
    const testTitle = 'Order Review';
    const newTitle = 'Product Selection';

    const { rerender } = render(
      <MemoryRouter initialEntries={['/order-review']}>
        <TestComponent title={testTitle} />
      </MemoryRouter>,
    );

    // Initially, document.title should be "Order Review"
    expect(document.title).toBe(testTitle);

    // Rerender component with a new title
    rerender(
      <MemoryRouter initialEntries={['/product-selection']}>
        <TestComponent title={newTitle} />
      </MemoryRouter>,
    );

    // After rerender, document.title should update to "Product Selection"
    expect(document.title).toBe(newTitle);
  });
});
