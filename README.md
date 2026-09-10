<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/PoolC/.github/main/profile/assets/poolc.dark.svg" />
  <img src="https://raw.githubusercontent.com/PoolC/.github/main/profile/assets/poolc.vertical.svg" width="100%" alt="PoolC" />
</picture>

연세대학교 공과대학 프로그래밍 학술동아리 **PoolC** 홈페이지

<img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 18" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
<img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 5" />
<img src="https://img.shields.io/badge/AWS-S3%20%7C%20CloudFront-FF9900?style=flat-square&logo=amazonaws&logoColor=white" alt="AWS" />

</div>

<br />

## Features

| 회원 · 운영 | 콘텐츠 | 게임화 |
| :---: | :---: | :---: |
| 인증 · 회원 · 동아리방 예약 | 세미나 · 게시판 · 도서 · 프로젝트 | 도감 · 퀘스트 · 포켓볼 |

## Stack

| Area | Stack |
| --- | --- |
| UI | React 18 · TypeScript · Vite |
| Design system | Ant Design · Emotion · antd-style |
| Data | TanStack Query · Redux · Axios |
| Editor | Toast UI Editor |
| Delivery | GitHub Actions · Amazon S3 · CloudFront |

## Local Development

<img src="https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js 20" />
<img src="https://img.shields.io/badge/Yarn-4-2C8EBB?style=flat-square&logo=yarn&logoColor=white" alt="Yarn" />

```bash
yarn install --immutable
yarn workspace @dialga/poolc.org start
```

| Service | Address |
| --- | --- |
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:8080 |

전체 개발 환경은 BE 저장소의 Docker Compose로 함께 실행할 수 있습니다.

```bash
docker compose -f ../be/docker-compose.local.yml up -d
```

## Environment

`VITE_*` 값은 브라우저에 공개되는 설정입니다. 개인 환경에서는 `.env.local`로만 override합니다.

| Variable | Description |
| --- | --- |
| `VITE_API_BASE_URL` | API base URL |
| `VITE_FILE_URL` | 파일 제공 base URL |
| `VITE_MAX_FILE_SIZE` | 일반 첨부 최대 크기 |
| `VITE_MAX_IMAGE_FILE_SIZE` | 이미지 업로드 최대 크기 |

## Quality

```bash
yarn workspace @dialga/poolc.org check:type
yarn workspace @dialga/poolc.org build --mode prod
```

## Delivery

```text
master push
  → type check · production build
  → S3 static asset publish
  → CloudFront cache invalidation
```

## Contributors

<div align="center">

| [Mayne0213](https://github.com/Mayne0213) | [jinhodotchoi](https://github.com/jinhodotchoi) | [mingd1023](https://github.com/mingd1023) | [Hys-Lee](https://github.com/Hys-Lee) | [jimmy0006](https://github.com/jimmy0006) |
| :---: | :---: | :---: | :---: | :---: |
| <img src="https://github.com/Mayne0213.png?size=160" width="88" alt="Mayne0213" /> | <img src="https://github.com/jinhodotchoi.png?size=160" width="88" alt="jinhodotchoi" /> | <img src="https://github.com/mingd1023.png?size=160" width="88" alt="mingd1023" /> | <img src="https://github.com/Hys-Lee.png?size=160" width="88" alt="Hys-Lee" /> | <img src="https://github.com/jimmy0006.png?size=160" width="88" alt="jimmy0006" /> |

</div>

---

PoolC 내부 운영 프로젝트입니다.
