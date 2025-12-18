import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Cart actions
const ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QTY: 'UPDATE_QTY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART',
};

// Cart reducer
function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const { item } = action.payload;
      const existingIndex = state.items.findIndex((i) => i.id === item.id);

      if (existingIndex >= 0) {
        // Item exists, increment quantity
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          qty: newItems[existingIndex].qty + 1,
        };
        return { ...state, items: newItems };
      } else {
        // New item
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: item.id,
              name: item.name,
              priceLabel: item.priceLabel,
              priceValue: item.price,
              qty: 1,
              image: item.image,
            },
          ],
        };
      }
    }

    case ACTIONS.UPDATE_QTY: {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== id),
        };
      }
      const newItems = state.items.map((i) =>
        i.id === id ? { ...i, qty } : i
      );
      return { ...state, items: newItems };
    }

    case ACTIONS.REMOVE_ITEM: {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter((i) => i.id !== id),
      };
    }

    case ACTIONS.CLEAR_CART:
      return { ...state, items: [] };

    case ACTIONS.LOAD_CART:
      return { ...state, items: action.payload.items };

    default:
      return state;
  }
}

// Initial state
const initialState = {
  items: [],
};

// Provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ringa-cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        dispatch({ type: ACTIONS.LOAD_CART, payload: { items: parsed } });
      }
    } catch (err) {
      console.error('Failed to load cart from localStorage', err);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('ringa-cart', JSON.stringify(state.items));
    } catch (err) {
      console.error('Failed to save cart to localStorage', err);
    }
  }, [state.items]);

  const addItem = (item) => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: { item } });
  };

  const updateQty = (id, qty) => {
    dispatch({ type: ACTIONS.UPDATE_QTY, payload: { id, qty } });
  };

  const removeItem = (id) => {
    dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };

  // Computed values
  const itemCount = state.items.reduce((sum, item) => sum + item.qty, 0);

  const hasWeightPricing = state.items.some(
    (item) => item.priceValue === null || item.priceLabel === 'Priced by weight'
  );

  const subtotal = state.items.reduce((sum, item) => {
    if (item.priceValue === null) return sum;
    return sum + item.priceValue * item.qty;
  }, 0);

  const value = {
    items: state.items,
    itemCount,
    hasWeightPricing,
    subtotal,
    addItem,
    updateQty,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook to use cart
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
