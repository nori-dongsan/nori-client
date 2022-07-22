export function checkNickname(value: string) {
  const regex = /^[가-힣|a-z|A-Z|0-9|]{2,10}$/;
  return regex.test(value);
}

export function division(array: string[]) {
  const count =
    Math.floor(array.length / 4) + Math.floor(array.length % 4) > 0 ? 1 : 0;
  const newArray = [];

  for (let i = 0; i < count; i += 1) {
    newArray.push(array.splice(0, 4));
  }
  return newArray;
}
