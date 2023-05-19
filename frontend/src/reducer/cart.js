export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || []; //Para guardar en el localStorage lo que hay en el carrito

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
        window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((i) => i.id === id);

      if (productInCartIndex >= 0) {
        //Si lo encuentra en el carrito
        const newState = structuredClone(state); //Hago un nuevo carrito
        //structuredClone: Hace copias profundas de los obj y array
        newState[productInCartIndex].quantity += 1; //y icrementamos la cantidad
        updateLocalStorage(newState)
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
      
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState =  state.filter((item) => item.id !== id);
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return [];
    }
  }
  return state;
};
