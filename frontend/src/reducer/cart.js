export const cartInitialState = [];

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART": {
      const productInCartIndex = state.findIndex((item) => item.id === payload.id);

      if (productInCartIndex >= 0) {
        const newState = [...state];
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [...state, { ...payload, quantity: 1 }];
      updateLocalStorage(newState);
      return newState;
    }

    case "REMOVE_FROM_CART": {
      const newState = state.filter((item) => item.id !== payload.id);
      updateLocalStorage(newState);
      return newState;
    }

    case "DECREASE_QUANTITY": {
      const productInCartIndex = state.findIndex((item) => item.id === payload.id);

      if (productInCartIndex >= 0) {
        const newState = [...state];
        if (newState[productInCartIndex].quantity > 1) {
          newState[productInCartIndex].quantity -= 1;
        } else {
          newState.splice(productInCartIndex, 1);
        }
        updateLocalStorage(newState);
        return newState;
      }

      return state;
    }

    case "CLEAR_CART": {
      updateLocalStorage([]);
      return [];
    }

    default:
      return state;
  }
};

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}