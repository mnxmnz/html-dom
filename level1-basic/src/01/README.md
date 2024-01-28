# [Change the favicon dynamically based on user's color scheme preference](https://phuoc.ng/collection/html-dom/change-the-favicon-dynamically-based-on-user-color-scheme-preference)

```html
<link rel="icon" href="favicon.png" />
```

- 브라우저 호환성을 위해 파비콘은 .ico 또는 .png 형식을 사용하는 것이 좋다. 다른 이미지 포맷도 사용할 수 있다.

```html
<link href="light-mode-favicon.png" rel="icon" media="(prefers-color-scheme: light)" />
<link href="dark-mode-favicon.png" rel="icon" media="(prefers-color-scheme: dark)" />
```

- 최신 브라우저에서는 `preferers-color-scheme` 미디어 쿼리를 통해 사용자의 선호도(라이트/다크)를 알 수 있다.
- 자바스크립트 코드 없이 파비콘을 변경할 수 있다.
