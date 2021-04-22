# Стартовый шаблон React (на основе CRA + TypeScript)

## Как установить?

1. Выполняем следующую команду не забывая переименовать `my-app` на название вашего проекта - `npx create-react-app my-app --template cra-template-neti`
2. Переходим к папке только что созданного проекта из шаблона - `cd [название проекта]`
3. Запускаем проект - `yarn start` 🙌

## Генерация модулей
#### Пустой модуль
Чтобы создать пустой модуль, вызовите следующую команду с именем модуля и модуль создасться в папку `src/modules/`.

`yarn generate-module moduleName`

#### Все модули из api-файла Postman
Если вы хотите сгенерировать все модули из api-файла Postman, вызовите команду ниже заменив url.

**Предупреждение: эта команда перепишет всю директорию `src/modules/`!**.

`yarn parse-modules https://example/api-doc`

[Подробнее о шаблоне 👉](https://github.com/NETI-MOBILE/cra-template-neti/blob/master/template/README.md)
