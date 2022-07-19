export function checkNickname(value: string) {
  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  return regex.test(value);
}
