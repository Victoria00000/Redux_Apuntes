import './App.css';
import { createStore, combineReducers } from 'redux';
import img from './img.jpg';

// Redux: simulación de tienda, la teoría básica

// ----------------- ACTIONS ----------------------------------------------------------
// defino las acciones, con su nombre(type) y su cant que la elige el cliente
const BUY_GAME1 = 'BUY_GAME1';
const buy_game1_action = (cant) => {
  return {
    type: BUY_GAME1,
    payload: cant,
  };
};
const RETURN_GAME1 = 'RETURN_GAME1';
const return_game1_action = (cant) => {
  return {
    type: RETURN_GAME1,
    payload: cant,
  };
};
const BUY_GAME2 = 'BUY_GAME2';
const buy_game2_action = (cant) => {
  return {
    type: BUY_GAME2,
    payload: cant,
  };
};
const RETURN_GAME2 = 'RETURN_GAME2';
const return_game2_action = (cant) => {
  return {
    type: RETURN_GAME2,
    payload: cant,
  };
};
const BUY_PS4 = 'BUY_PS4';
const buy_ps4_action = (cant) => {
  return {
    type: BUY_PS4,
    payload: cant,
  };
};
const RETURN_PS4 = 'RETURN_PS4';
const return_ps4_action = (cant) => {
  return {
    type: RETURN_PS4,
    payload: cant,
  };
};
const BUY_PS5 = 'BUY_PS5';
const buy_ps5_action = (cant) => {
  return {
    type: BUY_PS5,
    payload: cant,
  };
};
const RETURN_PS5 = 'RETURN_PS5';
const return_ps5_action = (cant) => {
  return {
    type: RETURN_PS5,
    payload: cant,
  };
};

// ----------------- REDUCERS ---------------------------------------------------------
// estado por defecto
const defaultStateGames = {
  game1: 10,
  game2: 10
};
const defaultStatePS = {
  ps4: 10,
  ps5: 10
};
// creo los reducer con sus 'casos'
const reducerPS = (state = defaultStatePS, action) => {
  switch (action.type) {
    case BUY_PS4: {
      return {
        ps4: state.ps4 - action.payload
      };
    };
    case RETURN_PS4: {
      return {
        ps4: state.ps4 + action.payload
      };
    };
    case BUY_PS5: {
      return {
        ps5: state.ps5 - action.payload
      };
    };
    case RETURN_PS5: {
      return {
        ps5: state.ps5 + action.payload
      };
    };
    default: return state;
  };
};
const reducerGames = (state = defaultStateGames, action) => {
  switch (action.type) {
    case BUY_GAME1: {
      return {
        game1: state.game1 - action.payload
      };
    };
    case RETURN_GAME1: {
      return {
        game1: state.game1 + action.payload
      };
    };
    case BUY_GAME2: {
      return {
        game2: state.game2 - action.payload
      };
    };
    case RETURN_GAME2: {
      return {
        game2: state.game2 + action.payload
      };
    };
    default: return state;
  };
};
// agrupo los reducers para el store
const reducerGroup = combineReducers({
  reducerGames,
  reducerPS
});

// ----------------- STORE ------------------------------------------------------------
// creo store y lo imprimo
const store = createStore(reducerGroup);
console.log(store);
// obtengo state de store y lo imprimo
console.log('(Shop-stock) initial state: ', store.getState());
// me suscribo al cambio de state del store y lo imprimo
store.subscribe(() => console.log('(New-shop-stock-games) new state: ', store.getState()));
// despacho acciones para el reducer (compra-devolución)
store.dispatch(buy_game1_action(3));
store.dispatch(return_game1_action(2));
store.dispatch(buy_game2_action(5));
store.dispatch(return_game2_action(4));
store.dispatch(buy_ps4_action(3));
store.dispatch(return_ps4_action(2));
store.dispatch(buy_ps5_action(5));
store.dispatch(return_ps5_action(4));

// -----------------------------------------------------------------------------------
function App() {
  return (
    <>
      <div>
        <img src={img} alt='Redux ilustración' />
      </div>
    </>
  );
}

export default App;
