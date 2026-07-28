# design-system

React + TypeScript + Vite + Tailwind CSS v4 기반 디자인 시스템입니다.

## 구성

- `src/components/` — 36개 컴포넌트 (Button, Input, Card, Modal, Toast 등)
- `src/index.css` — Tailwind 테마 토큰(`@theme`) 정의
- `tokens/` — 디자인 토큰 원본 (`app.tokens.json`: 네이티브 앱용, `web.tokens.json`: 웹용)

## 개발

```bash
npm install
npm run dev      # 개발 서버 실행
npm run build    # 앱(App.tsx 쇼케이스 페이지) 빌드
```

## 라이브러리 빌드

컴포넌트를 다른 프로젝트에서 import해서 쓸 수 있는 라이브러리 번들을 만듭니다.

```bash
npm run build:lib
```

- `dist/index.es.js` — 컴포넌트 JS 번들 (react/react-dom은 외부 의존성)
- `dist/design-system.css` — 컴파일된 Tailwind 스타일시트
- `dist/types/` — 타입 선언(.d.ts)

## claude.ai/design 동기화

이 저장소는 [/design-sync](.design-sync/) 스킬을 통해 [Claude Design](https://claude.ai/design) 프로젝트("PIB Design-system")로 동기화되어 있습니다. 설정은 `.design-sync/config.json`, 저작된 컴포넌트 프리뷰는 `.design-sync/previews/`에 있습니다. 자세한 내용은 `.design-sync/NOTES.md`를 참고하세요.

## 폰트

`--font-sans` 토큰은 "Naver Sans"를 우선 참조하지만 공개 배포판이 없어, 같은 폰트 스택의 오픈소스 대체 폰트인 **NanumSquare**(네이버, SIL OFL 라이선스)를 `src/fonts/nanumsquare/`에 포함했습니다.
