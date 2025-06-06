# Документация

- Папка для размещения документации по практике в формате Markdown.
- README.md — основной файл с документацией, описывающий процесс выполнения практики.
- При необходимости могут добавляться дополнительные файлы Markdown.

## Описание проекта

**Цель проекта**: создание Telegram-бота для проведения теста/викторины, который помогает пользователю определить уровень владения английским языком. Проект реализован с использованием Python и фреймворка Aiogram 3 — современного инструмента для асинхронной разработки Telegram-ботов.
Схема репозитория с проектом:
```
quiz_bot/
├── app/
│   ├── data/
│   │   └── questions.py         # Список вопросов и вариантов ответов
│   ├── db/
│   │   └── crud.py              # Взаимодействие с базой данных
│   │   └── db.py                # Подключение к базе данных
│   │   └── crud.py              # Модели SQLAlchemy, соответствующие таблицам в базе данных
│   ├── handlers/
│   │   ├── start.py             # Приветствие и начало диалога
│   │   └── quiz.py              # Основная логика викторины
│   ├── keyboards/
│   │   └── quiz_kb.py           # Генерация инлайн-клавиатур
│   ├── states/
│   │   └── quiz_states.py       # Определение состояний FSM
│   ├── create_bot.py            # Настройки бота
│   ├── main.py                  # Точка входа в приложение
│   ├── webserver.py             # Простой вебсервер на FastAPI, с эндпоинтом для бд.
├── initdb/                      # Точка входа (запуск бота)
│   ├── init.sql                 # Скрипт для создания таблиц
├── docker-compose.yml           # Файл для поднятия БД в докер-контейнере
└── requirements.txt             # Зависимости проекта
```

Использованные технологии для проекта:
- Python 3.10+
- Aiogram 3 — фреймворк для асинхронной работы с Telegram API
- FSM (Finite State Machine) — управление состояниями пользователя
- Инлайн-клавиатуры — интерфейс взаимодействия через кнопки
- Python-массив — структура хранения вопросов
- PostgreSQL — для хранения результатов
- FastAPI - веб-сервер для выдачи данных из БД по запросу

## Ход работы над проектом
### 02.04
Заполнен главный REАDME.md, начата работа с git: удаленный репозиторий склонирован на локальную машину, ветка master сделата upstream-веткой для master на локальной машине.

### 03.04
Создана структура сайта и шаблоны его страниц.Начата работа над вариативной частью задания (telegram-bot на языке python).

### 22.04
Бот получил базовый функционал - отклик на кнопку start и отправку сообщения и видео в ответ на сообщение от пользователя.
Заполнены все страницы сайта.

### 23.04
Заполнен файл документации - добавлен процесс выполнения практики. Репозиторий с тг-ботом добавлен как подмодуль основного репозитория практики.

### 16.05 
Доделан весь основной функционал бота.

### 18.05-20.05
Взаимодействие с организацией-партнером: участие в ИТ-чемпионате "Цифровая Эра Транспорта".

### 21.05
Добавлен доп. функционал к проекту: все пользователи, прошедшие викторину, и их результаты, теперь сохраныяются в базу данных, по запросу из список отдается в json-формате. Заполнена вся необходимая документация.





