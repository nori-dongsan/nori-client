export function checkNickname(value: string) {
  const regex = /^[가-힣|a-z|A-Z|0-9|]{2,10}$/;
  return regex.test(value);
}
