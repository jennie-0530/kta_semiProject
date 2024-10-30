export function calculateDaysLeft(endDate: string): string {
  const today = new Date(); // 현재 날짜
  const end = new Date(endDate); // 종료 날짜

  // 두 날짜 간의 차이를 밀리초로 계산한 후, 일수로 변환
  const timeDiff = end.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 밀리초 -> 일수 변환

  // D-day, 1일 남음, N일 남음 등의 메시지 반환
  if (daysLeft > 1) {
    return `${daysLeft}일 남음`;
  } else if (daysLeft === 1) {
    return `1일 남음`;
  } else if (daysLeft === 0) {
    return `D-day`;
  } else {
    return `마감됨`;
  }
}
