export const getFromLocalStorage = (namespace) => {
  const store = localStorage.getItem(namespace);
  return (store && JSON.parse(store)) || [];
};

export const saveToLocalStorage = (namespace, data) => {
  const store = getFromLocalStorage(namespace);
  if (data) {
    store.push(data);
    localStorage.setItem(namespace, JSON.stringify(store));
    return getFromLocalStorage(namespace);
  }
};

export const sortDataFromStorage = (namespace, field, order) => {
  const store = getFromLocalStorage(namespace);
  if (order === 'up') {
    if (field === ('phone' || 'age')) {
      return store.sort((a, b) => a[field] - b[field]);
    }
    return store.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }
  if (order === 'down') {
    if (field === ('phone' || 'age')) {
      return store.sort((a, b) => b[field] - a[field]);
    }
    return store.sort((a, b) => (a[field] > b[field] ? 1 : -1)).reverse();
  }
};

export const deleteFromLocalStorage = (namespace, id) => {
  const store = getFromLocalStorage(namespace);
  if (id) {
    store.forEach((user, index) => {
      if (user.id === id) {
        store.splice(index, 1);
      }
    });
    localStorage.setItem(namespace, JSON.stringify(store));
    return getFromLocalStorage(namespace);
  }
};
