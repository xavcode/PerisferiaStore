// export const cartInitialState =
//   JSON.parse(window.localStorage.getItem("cart")) || []; //Para guardar en el localStorage lo que hay en el carrito

// export const CART_ACTION_TYPES = {
//   ADD_TO_CART: "ADD_TO_CART",
//   REMOVE_FROM_CART: "REMOVE_FROM_CART",
//   CLEAR_CART: "CLEAR_CART",
// };

// // update localStorage with state for cart
// export const updateLocalStorage = (state) => {
//   window.localStorage.setItem("cart", JSON.stringify(state));
// };

// export const cartReducer = (state, action) => {
//   const { type: actionType, payload: actionPayload } = action;

//   switch (actionType) {
//     case CART_ACTION_TYPES.ADD_TO_CART: {
//       const { id } = actionPayload;
//       const productInCartIndex = state.findIndex((i) => i.id === id);

//       if (productInCartIndex >= 0) {
        // const newState = structuredClone(state);
        // newState[productInCartIndex].quantity += 1;
        // return newState;

         // 👶 usando el map
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })

        // ⚡ usando el spread operator y slice
//         const newState = [
//           ...state.slice(0, productInCartIndex),
//           {
//             ...state[productInCartIndex],
//             quantity: state[productInCartIndex].quantity + 1,
//           },
//           ...state.slice(productInCartIndex + 1),
//         ];

//         updateLocalStorage(newState);
//         return newState;
//       }

//       const newState = [
//         ...state,
//         {
//           ...actionPayload,
//           quantity: 1,
//         },
//       ];
//       updateLocalStorage(newState);
//       return newState;
//     }

//     case CART_ACTION_TYPES.REMOVE_FROM_CART: {
//       const { id } = actionPayload;
//       const newState = state.filter(item => item.id !== id);
//       updateLocalStorage(newState);
//       return newState;
//     }

//     case CART_ACTION_TYPES.CLEAR_CART: {
//       updateLocalStorage([]);
//       return [];
//     }
//   }

//   return state;
// };
