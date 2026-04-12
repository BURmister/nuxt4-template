# Get Started

Ниже порядок, который обычно удобнее всего для настройки нового проекта на базе этого шаблона.

## Шаг 1. Установите зависимости и проверьте dev-режим

```bash
pnpm install
pnpm dev
```

Сразу после старта проверьте страницы:

- `/`
- `/about`
- `/articles`
- `/articles/project-kickoff-checklist`
- `/contacts`
- `/ui`

## Шаг 2. Приведите `package.json` и `nuxt.config.ts` к проекту

Файлы:

- `package.json`
- `nuxt.config.ts`

Что обычно меняют первым:

- имя проекта в `package.json`
- `runtimeConfig.public.siteUrl`
- `runtimeConfig.public.siteName`
- `runtimeConfig.public.siteDescription`
- `runtimeConfig.public.apiPrefix`

Если backend уже готов, просто замените `'/api'` на внешний API. Если нет, временно оставьте локальный `server/api`.

## Шаг 3. Настройте стили и токены

Файлы:

- `app/config/styles/colors.scss`
- `app/config/styles/layout.scss`
- `app/config/styles/fonts.scss`
- `app/config/styles/ui.scss`

Рекомендуемый порядок:

1. цвета и фон страницы
2. wrapper, отступы, высоты header/bottom tabs
3. радиусы и базовые UI-переменные
4. шрифты и типографика

Это самый быстрый способ визуально “приземлить” шаблон под новый бренд.

## Шаг 4. Обновите базовый контент и навигацию

Файлы:

- `app/config/db/navigation.js`
- `server/mock/index.js`

Здесь лежат:

- header/footer/bottom tabs ссылки
- демо-контакты
- карточки преимуществ на главной
- моковые статьи и контент страниц

На старте можно даже не трогать UI-компоненты и просто заменить данные в этих двух файлах.

## Шаг 5. Подключите реальный API

Файлы:

- `app/composables/useFetch.js`
- `server/api/**`

Есть два сценария:

- быстрый старт без backend: оставляете `server/api` и меняете моки
- интеграция с backend: меняете `runtimeConfig.public.apiPrefix` и постепенно удаляете локальные роуты

`useApiFetch`, `useApi$fetch` и `useApiPaginatedList` уже готовы как стартовая точка.

## Шаг 6. Пересоберите страницы под ваш предметный слой

Файлы:

- `app/pages/**`
- `app/components/widgets/**`
- `app/components/shared/**`

Рекомендуемый подход:

1. оставьте app shell как есть
2. переименуйте демо-страницы под реальные разделы проекта
3. перенесите универсальные элементы в `shared`
4. собирайте экранные блоки в `widgets`

## Шаг 7. Оставьте только полезные примеры

После старта проекта обычно стоит удалить:

- лишние демо-статьи
- UI sandbox, если он больше не нужен
- неиспользуемые server routes

Оставить обычно стоит:

- общую структуру папок
- глобальные стили
- header/footer/bottom tabs
- page layout, breadcrumbs, seo section
- composables API-слоя
- stores для UI-сценариев

