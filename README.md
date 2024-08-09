# 공부내용 정리 

## 240217
- HTML 공부시작
- 

## 240216
- 깃허브에 push, pull 하는방법
- Readme 문서 작성법
- 다른 이용자 문서 fork 하는 방법
  
## 240215
- Branch 생성 방법 및 이론
- git 기본 명령어 공부
- 로컬-gitHub 등록
- config를 활용한 사용자 등록

## 240214
- git 설치 및 기본용어/명령어 공부
- gitHub 계정 생성/ 활용방법 습득
  

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
