export default function createStore(reducer) {
  let state;
  // add your code here
  function getState() {
    return state; 
  }

  function dispatch(action) {
    state = reducer(state, action);
    render();
  };
  dispatch({ type: '@@INIT' })
  
  return {
    dispatch,
    getState
  }
  
}

function render() {
  const container = document.getElementById('container');

}
``