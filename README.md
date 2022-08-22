# 굿로깅
### 저희 굿로깅 서비스는 플로깅(plogging)활동을 장려하기 위해 기획된 서비스 입니다.  
> 플로깅이란?
스웨덴에서 2016년에 처음 시작했으며, 스웨덴어에서 '줍다' 를 뜻하는 플로카 우프(Plocka Upp)[1]와 영어단어 조깅(jogging)이 합쳐진 합성어입니다.
즉 조깅을 하며 환경정화를 함께 하는 활동입니다.


#### 사용언어
- Html
- Javascript
- scss

#### 프레임워크
- React

#### 라이브러리
- react-router
- classnames
- scss
- eslint
- prettier
- stylelint
- react-hook-form
- redux toolkit
- recharts

#### 커밋 컨벤션
|키워드|설명|
|-|-|
|feat|기능 추가|
|fix|버그 수정|
|doc|문서 수정|
|style|코드 포맷팅, 코드 변경이 없는 경우|
|refactor|코드 리펙토링|
|chore|빌드 업무 수정, 패키지 매니저 수정|


#### 폴더구조
        📦src
    ┣ 📂assets
    ┃ ┣ 📂json
    ┃ ┃ ┗ 📜korea.json
    ┃ ┣ 📂pngs
    ┃ ┃ ┣ 📜boss.png
    ┃ ┃ ┣ 📜bronze.png
    ┃ ┃ ┣ 📜challenge.jpg
    ┃ ┃ ┣ 📜challenger.png
    ┃ ┃ ┣ 📜cheers.png
    ┃ ┃ ┣ 📜darkblue.png
    ┃ ┃ ┣ 📜everyday.png
    ┃ ┃ ┣ 📜flogging.png
    ┃ ┃ ┣ 📜gold.png
    ┃ ┃ ┣ 📜hashtag.png
    ┃ ┃ ┣ 📜lock.png
    ┃ ┃ ┣ 📜medal.png
    ┃ ┃ ┣ 📜menu.png
    ┃ ┃ ┣ 📜mvp.png
    ┃ ┃ ┣ 📜newbie.png
    ┃ ┃ ┣ 📜park.png
    ┃ ┃ ┣ 📜plant.png
    ┃ ┃ ┣ 📜platinum.png
    ┃ ┃ ┣ 📜silver.png
    ┃ ┃ ┣ 📜start.png
    ┃ ┃ ┗ 📜together.png
    ┃ ┗ 📂svgs
    ┃ ┃ ┣ 📜chevron-left-solid.svg
    ┃ ┃ ┣ 📜house-solid.svg
    ┃ ┃ ┗ 📜index.js
    ┣ 📂components
    ┃ ┣ 📂Buttons
    ┃ ┃ ┣ 📂BackButton
    ┃ ┃ ┃ ┣ 📜backButton.module.scss
    ┃ ┃ ┃ ┗ 📜index.jsx
    ┃ ┃ ┣ 📂Button
    ┃ ┃ ┃ ┣ 📜button.module.scss
    ┃ ┃ ┃ ┗ 📜index.jsx
    ┃ ┃ ┣ 📂CompleteButton
    ┃ ┃ ┃ ┣ 📜completeButton.module.scss
    ┃ ┃ ┃ ┗ 📜index.jsx
    ┃ ┃ ┣ 📂HomeButton
    ┃ ┃ ┃ ┣ 📜homeButton.module.scss
    ┃ ┃ ┃ ┗ 📜index.jsx
    ┃ ┃ ┗ 📂ToggleButton
    ┃ ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┃ ┗ 📜toggleButton.module.scss
    ┃ ┣ 📂Gnb
    ┃ ┃ ┣ 📜gnb.module.scss
    ┃ ┃ ┗ 📜index.jsx
    ┃ ┣ 📂Progress
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜progress.module.scss
    ┃ ┣ 📂RankProgess
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜rankProgress.module.scss
    ┃ ┣ 📂Slider
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜slider.module.scss
    ┃ ┗ 📜OverviewBar.jsx
    ┣ 📂hooks
    ┃ ┣ 📜useInput.js
    ┃ ┗ 📜useIsAuth.jsx
    ┣ 📂redux
    ┃ ┣ 📜authSlice.js
    ┃ ┣ 📜ploggingSlice.js
    ┃ ┗ 📜store.js
    ┣ 📂routes
    ┃ ┣ 📂CompletePage
    ┃ ┃ ┣ 📜completePage.module.scss
    ┃ ┃ ┗ 📜index.jsx
    ┃ ┣ 📂FeedPage
    ┃ ┃ ┣ 📜feedPage.module.scss
    ┃ ┃ ┗ 📜index.jsx
    ┃ ┣ 📂LoginPage
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜loginPage.module.scss
    ┃ ┣ 📂MainPage
    ┃ ┃ ┣ 📂Chart
    ┃ ┃ ┃ ┗ 📜index.jsx
    ┃ ┃ ┣ 📂Slider
    ┃ ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┃ ┗ 📜slider.module.scss
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜mainPage.module.scss
    ┃ ┣ 📂MenuPage
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜menuPage.module.scss
    ┃ ┣ 📂MyChallengePage
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜myChallengePage.module.scss
    ┃ ┣ 📂MyinfoPage
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜myInfoPage.module.scss
    ┃ ┣ 📂PloggingDoingPage
    ┃ ┃ ┣ 📂ProgressBar
    ┃ ┃ ┃ ┗ 📜index.jsx
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜ploggingDoingPage.module.scss
    ┃ ┣ 📂QuestPage
    ┃ ┃ ┣ 📂Modal
    ┃ ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┃ ┗ 📜modal.module.scss
    ┃ ┃ ┣ 📜EachBadge.jsx
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜questPage.module.scss
    ┃ ┣ 📂SettingPage
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜settingPage.module.scss
    ┃ ┗ 📂SignupPage
    ┃ ┃ ┣ 📜index.jsx
    ┃ ┃ ┗ 📜signupPage.module.scss
    ┣ 📂service
    ┃ ┣ 📂goodlogging
    ┃ ┃ ┗ 📜index.js
    ┃ ┗ 📂kakao
    ┃ ┃ ┣ 📜HotPlace.jsx
    ┃ ┃ ┗ 📜KakaoMap.jsx
    ┣ 📂styles
    ┃ ┣ 📂base
    ┃ ┃ ┣ 📜_fonts.scss
    ┃ ┃ ┣ 📜_more.scss
    ┃ ┃ ┗ 📜_reset.scss
    ┃ ┣ 📂constants
    ┃ ┃ ┣ 📜_colors.scss
    ┃ ┃ ┣ 📜_levels.scss
    ┃ ┃ ┗ 📜_sizes.scss
    ┃ ┣ 📂mixins
    ┃ ┃ ┣ 📜_animation.scss
    ┃ ┃ ┣ 📜_flexbox.scss
    ┃ ┃ ┣ 📜_position.scss
    ┃ ┃ ┣ 📜_responsive.scss
    ┃ ┃ ┗ 📜_visual.scss
    ┃ ┣ 📜index.js
    ┃ ┗ 📜index.scss
    ┣ 📂util
    ┃ ┣ 📜axios.js
    ┃ ┣ 📜geolocation.js
    ┃ ┗ 📜getCoordinates.js
    ┣ 📜App.js
    ┣ 📜App.test.js
    ┣ 📜index.js
    ┣ 📜reportWebVitals.js
    ┣ 📜routes.module.scss
    ┗ 📜setupTests.js
---

#### 지난주부터 오늘까지 무엇을 진행했는지(Done) 

- 프론트엔드, 백엔드 초기설정 (Eslint, Prettier, Stylelint)
- 초기 기획 (Miro, Notion)
- 초기 디자인 (Figma)

- 프론트엔드 : 로그인페이지, 회원가입페이지, MyChallenge페이지

#### 오늘부터 다음 주까지 무엇을 할 예정인지(ToDo) 
- 백엔드 : 모델 만들기, 라우터 분리, API문서 만들기
- 프론트 
  - 이유정 : 플로깅 화면
  - 박은서 : 설정화면 logic 구현
  - 김보현 : 메인화면

#### 진행하면서 문제가 어떤 것이 있었는지 그것이 해결중인지 해결되었는지 해결했다면 어떤 식으로 해결했는지(Issue) :
아직까지는 없으나 프로젝트를 진행하며 생길 것 같다.

---

#### Done
##### FE
- [x] 로그인 페이지 마크다운
- [x] 회원가입 페이지 마크다운
- [x] My challenge 페이지 마크다운
- [x] 설정화면 페이지 마크다운
- [x] 플로깅 로고 디자인
##### BE
- [x] mySQL 데이터베이스 원격 접속되도록 설정
- [x] 필요한 모델 구상 (유저 모델, 쓰레기 모델, 플로깅 모델, 챌린지 모델, 달력 모델, 게시물 모델, 좋아요 모델, 댓글 모델)
- [x] 회원가입 / 로그인
- [x] 유저 모델 생성
- [x] 챌린지 모델 생성
- [x] 쓰레기 모델 생성
- [x] 유저 생성 시 챌린지 모델 생성하도록 설정
- [x] 백엔드 API 문서 작성 틀 작성 완료
#### In progress
- [ ] 회원가입 logic
#### Do do
- [ ] 플로깅 페이지 마크다운
- [ ] 메인 페이지 마크다운
- [ ] 로그인 logic

#### Issue
###### 기획
- [x] 프로깅에 대한 접근성 부족 및 사용자 제한 - 성취감과 흥미도를 높이며 사용자가 즐거움을 느낄 수 있도록 퀘스트, 챌린지 ,뱃지, 랭킹 시스템을 추가함
###### BE
- [x] 깃허브 403에러 - 권한이 없어서 push가 안되는 이슈 => repo를 하나 더 만들어서 push.