/**
 * 암호를 해독해서 반환하는 함수
 * @param {string} cryptogram 암호
 * @returns {string} 해독 결과
 */
function problem2(cryptogram) {
  // 암호를 한 글자씩 나눈다.
  const characters = cryptogram.split("");

  // 한 글자씩 순회하면서
  for (const character of characters) {
    // 현재 글자가 두 번 이상 연속으로 반복되는지 검사할 정규표현식을 만든다.
    const ConsecutiveDuplication = new RegExp(`${character}{2,}`);
    // 연속하는 중복 문자가 있는지 검사한다.
    const hasConsecutiveDuplication = ConsecutiveDuplication.test(cryptogram);

    // 연속하는 중복 문자가 있다면
    if (hasConsecutiveDuplication === true) {
      // 연속하는 문자열을 제거한 문자열을 만들고,
      const replacedCryptogram = cryptogram.replace(ConsecutiveDuplication, "");
      // 재귀 반복한다.
      return problem2(replacedCryptogram);
    }
  }

  return cryptogram;
}

module.exports = problem2;
