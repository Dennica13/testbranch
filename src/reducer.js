// const initialState = 0; // начальное состояние заменили в = 0 в reducer

const reducer = (state = 5, action) => {  //reducer принимает 2 аргумента. какой state и какое действие action. action - это объект {}
    switch (action.type) {
      case 'INC':
        return state + 1;
      case 'DEC':
          return state - 1;
      case 'RAND':
          return state + action.value;
      default: 
        return state;
    }
  }

export default reducer;