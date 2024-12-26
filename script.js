// 로딩 화면 시작
function startLoading() {
  const nickname = document.getElementById("nickname").value;
  if (!nickname) {
    alert("닉네임을 입력해주세요.");
    return;
  }

  // 닉네임을 저장하고 로딩 화면 표시
  document.getElementById("nicknameInput").style.display = "none"; // 입력창 숨기기
  document.getElementById("loadingScreen").style.display = "block"; // 로딩 화면 보이기

  // 1.5초 후 운세 결과 페이지로 넘어감
  setTimeout(generateFortune, 1500);
}

// 운세 생성 함수
function generateFortune() {
  const nickname = document.getElementById("nickname").value;

  // 운세 메시지 배열
  const fortunes = [
    "오늘은 좋은 일이 생길 거예요!",
    "소중한 사람과의 시간이 기다리고 있습니다.",
    "새로운 기회가 다가오고 있어요, 도전해 보세요!",
    "오늘은 조심스럽게 행동하는 것이 좋습니다.",
    "행운이 따르는 날입니다. 기회를 놓치지 마세요.",
    "어떤 일이든 긍정적인 마음으로 임하면 좋은 결과가 있을 거예요."
  ];

  // 행운의 색 배열
  const colors = ["빨간색", "파란색", "초록색", "노란색", "흰색", "보라색"];

  // 행운의 숫자 배열
  const numbers = [3, 7, 8, 13, 21, 24];

  // 랜덤 코멘트 배열
  const comments = [
    "배가 고파요",
    "저는 칼퇴하고 싶어요",
    "오늘은 부대찌개가 땡기네요",
    "당신은 '바보몽총이' 입니다",
    "저에게 돈을 주세요"
  ];

  // 랜덤 행운지수 (기본 40%부터 랜덤 생성)
  const luckPercent = Math.floor(Math.random() * (100 - 40 + 1)) + 40; // 40~100 사이

  // 랜덤 인덱스 생성
  const randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const randomNumberIndex = Math.floor(Math.random() * numbers.length);
  const randomCommentIndex = Math.floor(Math.random() * comments.length);

  // 랜덤 값 선택
  const fortune = fortunes[randomFortuneIndex];
  const color = colors[randomColorIndex];
  const number = numbers[randomNumberIndex];
  const comment = comments[randomCommentIndex];

  // 운세 결과 화면 표시
  document.getElementById("loadingScreen").style.display = "none"; // 로딩 화면 숨기기
  document.getElementById("fortuneContent").style.display = "block"; // 운세 화면 보이기

  // 운세 결과 표시
  document.getElementById("fortuneDisplay").innerHTML = `${nickname}님의 운세:<br>${fortune}`;
  document.getElementById("color").innerText = color;
  document.getElementById("number").innerText = number;
  document.getElementById("commentText").innerText = comment;

  // 행운지수 표시
  document.getElementById("luckPercent").innerText = `${luckPercent}%`;
  document.getElementById("percentBar").style.width = `${luckPercent}%`;
}
