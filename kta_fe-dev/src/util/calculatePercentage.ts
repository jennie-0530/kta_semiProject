export function calculatePercentage(
  goalAmount: number,
  currentAmount: number
): number {
  if (goalAmount === 0) return 0; // 목표 금액이 0일 때, 0% 반환

  const percentage = (currentAmount / goalAmount) * 100;
  return Math.round(percentage * 100) / 100; // 소수점 두 자리까지 반올림
}
