# Домашнее задание 5.9. Работа с формами

## Описание

- Компонент MinMaxCounter:
  Преобразован в "ленивый", то есть вызывается callback onChange не сразу, а при потере фокуса с input или нажатии key enter.

- Компонент SelectArticle:
  Дан <select> и 3 абзаца. В селекте можно выбрать один из трех пунктов. В зависимости от выбора на экране виден один из трех абзацев.

- Компонент LoginPass:
  Добавлена валидация на корректность введенного email в поле логин(наличие @, домена, .com), и на введеный пароль, который должен быть не менее 6 символов.


## Технологии

> JavaScript, React, CSS

## Как запустить проект

- Клонировать репозиторий и перейти в него в командной строке.

```Bash
git clone <url-адрес репозитория на GitHub>

cd <название папки>
```

- Установить зависимости из файла package.json:

```Bash
npm i
```

```Bash
npm start
```

Разработчик [Дарья](https://github.com/daria-bnn?tab=repositories)
