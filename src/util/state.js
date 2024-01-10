export default function state(initialState) {
  let state = initialState;

  function getState() {
    return state;
  }

  function setState(newState) {
    state = newState;
  }

  return { getState, setState };
}
