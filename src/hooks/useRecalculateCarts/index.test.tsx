import useRecalculateCarts from '.';
import * as recalculateCartsApi from '../../services/recalculate-carts';

import { renderHook, waitFor } from '@testing-library/react';

jest.mock('../../services/recalculate-carts');

describe('useRecalculateCarts', () => {
  let mockRecalculateCartsApi;
  beforeEach(() => {
    mockRecalculateCartsApi = recalculateCartsApi.recalculateCartsApi;
    jest.clearAllMocks();
  });
  test('Test useRecalculateCarts with success', async () => {
    const mockResponse = { id: 'cart123', items: [{ id: 'item1', quantity: 2 }] };
    mockRecalculateCartsApi.mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useRecalculateCarts('cart123', 'en-US'));
    await waitFor(() => {
      expect(result.current).toEqual(mockResponse);
    });
  });

  test('Test useRecalculateCarts with error', async () => {
    const mockResponse = {
      error: 'Mock Api Error',
      status: 500,
      items: { id: 'item1', quantity: 2 },
    };
    mockRecalculateCartsApi.mockRejectedValueOnce(mockResponse);

    const { result } = renderHook(() => useRecalculateCarts('cart123', 'en-US'));
    await waitFor(() => {
      expect(result.current).not.toEqual(mockResponse);
    });
  });
});
