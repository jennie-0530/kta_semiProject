export function formatAmount(amount: string): string {
  // 소수점 아래는 버리고 정수 부분만 사용
  const integerAmount = Math.floor(Number(amount));

  // 3자리마다 콤마 추가
  return integerAmount.toLocaleString();
}
