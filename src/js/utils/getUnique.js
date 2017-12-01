export default function getUnique(array) {
  return array.filter((elem, index, array) => {
    return index === array.indexOf(elem);
  })
}
