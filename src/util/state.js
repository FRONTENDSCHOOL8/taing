export default function state(initialState) {
  let state = initialState;

  const callbacks = [];

  function setState(newState) {
    if (state === newState) {
      return;
    }

    state = newState;
    callbacks.forEach((callback) => callback(state));
  }

  function onChange(callback) {
    callbacks.push(callback);
  }

  return [state, setState, onChange];
}
