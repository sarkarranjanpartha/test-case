import React, { useEffect } from 'react';
import { awsRum } from '../../utils/awsRum';
import { recalculateCartsApi } from '../../services/recalculate-carts';

function useRecalculateCarts(cartId: string, locale: string) {
  const [recalculateCart, setRecalculateCart] = React.useState({});

  useEffect(() => {
    recalculateCartsApi(cartId, locale)
      .then((recalculateResponse) => {
        setRecalculateCart(() => recalculateResponse);
      })
      .catch((recalculateError) => {
        awsRum?.recordEvent('recalculate-cart', {
          payload: recalculateError,
          status: recalculateError?.status,
          requestUrl: recalculateError?.config?.url,
          username: 'username',
        });
      });

    return () => {
      setRecalculateCart({});
    };
  }, [cartId, locale]);

  return recalculateCart;
}
export default useRecalculateCarts;
