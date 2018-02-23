// let initialState = 0
//
// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state;
//   }
// }

let initialState = 0

export const counterReducer = (state = initialState, action) => {
  if (state == 0 || state > 0) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
      case 'DECREMENT':
        return state - 1
    default:
      return state;
    }
  } 
  }
