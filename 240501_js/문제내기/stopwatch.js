// 랜덤한 색상 배열
const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33FF', '#FFFF33', '#33FF99'];

let timer; // setInterval을 저장할 변수
let isRunning = false; // 초시계가 실행 중인지 여부를 나타내는 변수

// 초시계 업데이트 함수
function updateStopwatch() {
  const stopwatchDisplay = document.getElementById('stopwatch');
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  timer = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    // 시, 분, 초를 두 자리 숫자로 표시하기 위해 패딩을 추가
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    stopwatchDisplay.textContent = formattedTime;
  }, 1000);
}

// 시작 또는 중지 버튼 클릭 시 호출되는 함수
function toggleStopwatch() {
  const btn = document.getElementById('btn');
  if (isRunning) {
    clearInterval(timer); // 초시계를 중지
    btn.textContent = 'Start'; // 버튼 텍스트를 "Start"로 변경
  } else {
    updateStopwatch(); // 초시계 시작
    btn.textContent = 'Stop'; // 버튼 텍스트를 "Stop"으로 변경
  }
  isRunning = !isRunning; // 초시계 상태를 반전
}

// 시작 또는 중지 버튼 클릭 이벤트 리스너 등록
document.getElementById('btn').addEventListener('click', function() {
  toggleStopwatch(); // 버튼을 클릭할 때마다 초시계를 시작 또는 중지
  // 랜덤한 배경색 선택
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColorIndex];
});