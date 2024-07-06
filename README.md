# ALGOHUB

본 프로젝트는 숭실대학교 컴퓨터학부 소프트웨어공모전 2024 출품작입니다.

> 2024.07.05 ~ 2024.07.15

<!-- ## 👬 팀 소개

|                                                                    **최주용**                                                                    |                                                                     **이진**                                                                     |                                                                    **김한서**                                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <center><img src="https://velog.velcdn.com/images/wuzoo/post/142ca9e2-1b00-4c56-a79c-d751c7f4430b/image.jpeg" width="150" height="150"></center> | <center><img src="https://velog.velcdn.com/images/wuzoo/post/48d244c4-229e-44d5-acf7-87cf64fd4469/image.jpeg" width="150" height="150"></center> | <center><img src="https://velog.velcdn.com/images/wuzoo/post/18d99ff7-e654-4beb-b634-2fc8b6f38f8c/image.jpeg" width="150" height="150"></center> |
|                                                        [wuzoo](https://github.com/wuzoo)                                                         |                                                       [j-nary](https://github.com/j-nary)                                                        |                                                      [seueooo](https://github.com/seueooo)                                                       |
|                                                                    홈 페이지                                                                     |                                                            키워드 페이지, 리뷰 페이지                                                            |                                                                   완료 페이지                                                                    |
|                                                           방문한 모든 가게 조회(`GET`)                                                           |                                                                리뷰 작성(`POST`)                                                                 |                                                            모든 리뷰어들 조회(`GET`)                                                             |
|                                                            첫화면 별표 누르기(`POST`)                                                            |                                                                                                                                                  |                                                                                                                                                  |
|                                                         예약 횟수와 총 금액 반환(`GET`)                                                          |                                                                                                                                                  |                                                                                                                                                  | -->

## 🔗 기술 스택

|  **category**   |          **stack**           |
| :-------------: | :--------------------------: |
|    `Common`     | `eslint`, `prettier`, `yarn` |
|   `Language`    |  `TypeScript`,`JavaScript`   |
|     `Build`     |            `Vite`            |
|   `Framework`   |           `React`            |
|     `Style`     |          `emotion`           |
| `Data Fetching` |    `Axios`, `React-Query`    |
| `Collaboration` | `Notion`, `Figma`, `Discord` |

## 🎯 기능 목록



## 🖋️ 컨벤션



## 📁 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 assets
	|      |--📁imgs
	|      |--📁svgs
	|-- 📁 api
	|      |-- member.ts
	|      |-- reservation.ts
	|-- 📁 components
	|      |--📁commons
	|         |-- 📁Button
	|             |-- Button.tsx
	|             |-- Button.style.ts
	|      |--📁reservation (domain)
	|-- 📁 constants
	|      |-- index.ts (상수 데이터 많다면 분리)
	|-- 📁 hooks
	|      |-- 📁 commons
	|          |-- useOverlay.ts
	|      |-- 📁 apis
	|          |-- useMyReservations.ts
	|-- 📁 pages
	|      |--📁APage
	|      |     |-- Apage.tsx
	|      |     |-- Apage.style.ts
	|      |--📁BPage
	|      |--📁CPage
	|-- 📁 router
	|      |-- router.tsx
	|-- 📁 styles
	|      |-- 📁 theme
	|          |-- theme.ts
	|          |-- emotion.d.ts
	|      |-- GlobalStyle.ts
	|-- 📁 utils
	|      |-- date.ts
	|-- 📁 type
	|      |-- api.ts
	|      |-- reservation.ts
	|-- App.tsx
	|-- main.tsx
|-- .eslintrc.json
|-- .prettierrc
|-- .stylelintrc
|-- .gitignore
```
