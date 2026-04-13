# Nuxt 4 Template

Стартовый шаблон Nuxt 4, собранный по мотивам боевого проекта, но без e-commerce-специфики под основу для нового проекта:

- уже разложена архитектура `app/pages`, `components/shared`, `components/widgets`, `composables`, `stores`, `server`
- уже есть примеры страниц, компонентов, stores, composables и локального API
- уже есть глобальные стили, app shell и паттерн сборки страниц
- убрана бизнес-логика магазина: корзина, checkout, auth-flow, профиль, каталог и внешние интеграции

## С чего начать, если вы только открыли проект

1. Установите зависимости и запустите проект.
2. Откройте главные точки входа в код.
3. Приведите `nuxt.config.ts` и стили к новому проекту.
4. Замените демо-данные и только потом начинайте расширять предметную логику.

Команды:

```bash
pnpm install
pnpm dev
```

После старта проверьте:

- `/`
- `/about`
- `/articles`
- `/articles/project-kickoff-checklist`
- `/contacts`
- `/ui`

## Какие файлы открыть первыми

Если нужно быстро понять, как проект устроен, открывайте именно в таком порядке:

1. `README.md` — общий смысл шаблона и порядок входа.
2. `nuxt.config.ts` — runtimeConfig, алиасы, модули.
3. `app/app.vue` — общий каркас приложения.
4. `app/config/styles/*` — цвета, wrapper, типографика, UI-переменные.
5. `app/config/db/navigation.js` — навигация, контакты, стартовые данные.
6. `app/pages/index.vue` и `app/pages/articles/index.vue` — примеры страниц.
7. `app/components/widgets/**` — как собираются экранные блоки.
8. `app/components/shared/**` — что считается базовым переиспользуемым UI.
9. `app/composables/useFetch.js` и `app/composables/useApiPaginatedList.js` — базовый API-слой.
10. `server/mock/index.js` и `server/api/**` — как шаблон живет без внешнего backend.

## Что уже есть внутри

- страницы: главная, about, contacts, список материалов, детальная статья, UI sandbox
- app shell: header, footer, mobile bottom tabs, modal provider
- shared UI: кнопки, breadcrumbs, article card, HTML renderer, pagination, empty state
- composables: API wrappers, paginated list, normalize/helpers, router/share helpers
- stores: burger menu, bottom tabs, confirm modal, selection group
- локальный mock API через `server/api`, чтобы проект можно было поднять без внешнего backend

## Как здесь принято писать код

- `shared` — маленькие универсальные компоненты без привязки к конкретной странице
- `widgets` — крупные секции и экранные блоки, собранные из shared-компонентов
- `pages` — маршруты Nuxt, которые склеивают данные, SEO и widgets
- `composables` — переиспользуемая логика без UI
- `stores` — глобальное UI-состояние, а не бизнес-логика ради бизнес-логики

То есть шаблон хранит именно инфраструктурный слой, который стоит переносить между проектами.

## Что менять в первую очередь под новый проект

1. `nuxt.config.ts`
Причина: здесь домен, API prefix, site name и базовые runtime-настройки.

2. `app/config/styles/colors.scss`, `layout.scss`, `fonts.scss`, `ui.scss`
Причина: это самый быстрый способ привести шаблон к новому бренду.

3. `app/config/db/navigation.js`
Причина: там лежат ссылки, контакты и часть стартового контента.

4. `server/mock/index.js`
Причина: там демо-страницы и статьи, которые проще заменить в самом начале.

5. `app/pages/**` и `app/components/widgets/**`
Причина: после настройки основы можно уже спокойно пересобирать реальные разделы проекта.

## Как работать с API

По умолчанию шаблон стартует на локальном `server/api`, чтобы:

- сразу работал SSR
- можно было верстать без backend
- были живые примеры запросов

Когда внешний API готов:

1. меняете `runtimeConfig.public.apiPrefix` в `nuxt.config.ts`
2. адаптируете `useFetch.js`, если нужны токены, headers или обработка ошибок
3. постепенно убираете демо-роуты из `server/api`

## Что обычно можно удалить после старта

- демо-статьи
- UI sandbox, если он больше не нужен
- локальные server routes, которые заменены реальным backend

## Документация

- [Get Started](./docs/01-get-started.md)
- [Структура проекта](./docs/02-structure.md)
- [Архитектура и правила](./docs/03-architecture.md)
