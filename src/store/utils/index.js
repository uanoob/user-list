export const getLocalStorage = (namespace) => {
  const store = localStorage.getItem(namespace);
  return (store && JSON.parse(store)) || [];
};

export const saveToLocalStorage = (namespace, data) => {
  const store = getLocalStorage(namespace);
  if (data) {
    store.push(data);
    localStorage.setItem(namespace, JSON.stringify(store));
    return getLocalStorage(namespace);
  }
};
