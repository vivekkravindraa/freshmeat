export default function selected(state = 1, action) {
    switch (action.type) {
      case 'SET_SELECTED':
        return state;
      default:
        return state;
    }
}
