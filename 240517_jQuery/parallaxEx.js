// a 요소가 가지고 있는 기본 이벤트 제거
$()

$().each(() => {
  const bgColor = $().data('bg');
  $().css({'background-color': bgColor})
});