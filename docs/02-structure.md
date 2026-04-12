# Структура проекта

```text
nuxt4-template/
├─ app/
│  ├─ app.vue
│  ├─ components/
│  │  ├─ shared/
│  │  └─ widgets/
│  ├─ composables/
│  ├─ config/
│  │  ├─ db/
│  │  └─ styles/
│  ├─ middleware/
│  ├─ pages/
│  ├─ plugins/
│  └─ stores/
├─ docs/
├─ public/
├─ server/
│  ├─ api/
│  ├─ mock/
│  └─ routes/
├─ nuxt.config.ts
├─ package.json
└─ README.md
```

## Что где лежит

- `app/components/shared` — универсальные кнопки, карточки, breadcrumbs helpers, pagination
- `app/components/widgets` — крупные блоки страниц и app shell
- `app/pages` — маршруты Nuxt
- `app/composables` — API wrappers, helpers, paginated list, share/router utils
- `app/stores` — UI-сценарии через Pinia
- `app/config/db` — локальные тексты, ссылки, навигация, простые конфиги
- `app/config/styles` — токены и глобальные стили
- `server/mock` — локальные демо-данные
- `server/api` — mock API для SSR и реальных примеров запросов
- `server/routes` — системные роуты вроде `robots.txt`

## Быстрый поиск по проекту

Что менять в первую очередь:

- навигацию и контакты — `app/config/db/navigation.js`
- цвета и отступы — `app/config/styles/*.scss`
- общий каркас приложения — `app/app.vue`
- API слой — `app/composables/useFetch.js`
- примеры контента — `server/mock/index.js`

