function AddItem(list) {
  if (list.length === 0) {
    list.push(1)
  } else {
    list.push(list[list.length - 1] + 1)
  }
  return [...list]
}
function RemoveItem(list) {
  list.pop()
  return [...list]
}

export { RemoveItem, AddItem }
