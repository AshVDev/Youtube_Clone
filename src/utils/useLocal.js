function useLocal(key, value, set = false) {
  set && localStorage.setItem(key, JSON.stringify(value));
  return JSON.parse(localStorage.getItem(key));
}
export default useLocal;
