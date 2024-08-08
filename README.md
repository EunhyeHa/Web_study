# 공부내용 정리 

## 

240226_works
- 이미지 파일과 인라인 요소에 대해서 배움.

3월 11일 과제 진행..
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>formStyleEx</title>
  <style>
    body {
      margin: auto;
    }
    form {
      width: 500px; height: 250px;
      background-color: chocolate;
      margin: auto;
      padding: 100px 50px 0px 50px;
    }
    .name {
      font-size: 15px;
      font-weight: bold;
      padding: 10px;
      background-color: #c7e4fd;
      color: sienna;
      border-radius: 20px;
      margin-bottom: 10px;
    }
    label {
      color: #c7e4fd;
      font-size: 15px;
      margin: 10px;
    }
  </style>
</head>

<body>
  <form>
    <fieldset class="form">
      <legend class="name">회원가입</legend>
      <label for="userName">이름 : </label>
      <input type="text" id="user_name" autofocus> <br>
      <label for="userName">이메일 : </label> <br>
      <button type="submit">가입</button>
      <button type="submit">취소</button>
    </fieldset>
</body>
</html>
