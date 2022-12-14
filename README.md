# react_sleact

[인프런 강의](https://www.inflearn.com/course/%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%B1%84%ED%8C%85/dashboard)

# 초기 세팅 방법

- node 16버전(14나 17도 괜찮음)과 MySQL을 미리 설치하기, mysql은 설치과정 중 비번 설정 함.
- cd back (멀티캠퍼스 강좌 수강자라면 cd multicampus-back)
- npm i (여기서 에러나면 질문으로 문의)
- .env 작성하기(COOKIE_SECRET과 MYSQL_PASSWORD 비밀번호 설정)

  - COOKIE_SECRET=cookienyamnyam
  - MYSQL_PASSWORD=디비비번

- config/config.json 설정(MYSQL 접속 설정)
- npx sequelize db:create(스키마 생성)
- npm run dev했다가 ctrl + c로 끄기(테이블 생성)
- npx sequelize db:seed:all(기초 데이터 넣기)
- npm run dev(앞으로 매번 이걸로 백엔드 서버 켜야 함, 1~8은 할 필요 없음)

# 프로젝트 구조

백엔드
back
http://localhost:3095/

프론트엔드
front
http://localhost:3090/
