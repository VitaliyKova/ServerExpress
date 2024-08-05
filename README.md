# ServerExpress
## Сервер на Express с счетчиком маршрутов
Это сервер на Express, который увеличивает счетчик каждый раз, когда доступен определенный маршрут. Счетчик хранится в JSON файле. Если файл не существует, он будет создан с начальным значением счетчика.

## Требования
Node.js (v14 или выше)
npm

## Установка
### Клонируйте репозиторий:
```sh
git clone https://github.com/VitaliyKova/ServerExpress.git
cd ServerExpres
```
### Установите зависимости:
```sh
npm install
```

## Использование
### Запустите сервер:
```sh
npm start
```
### Сервер будет запущен на порту по умолчанию (3000).

### Доступ к маршрутам можно получить через браузер или с помощью инструмента, такого как curl или Postman

### Это увеличит счетчик для маршрута '/' и вернет количество раз, когда этот маршрут был доступен.
```sh
curl http://localhost:3000/
```


## Структура проекта
server.js: Главный файл сервера, в котором настраивается приложение Express. \
api.js: Определяет маршруты и использует функцию increment для обработки маршрутов.\
function.js: Содержит функцию increment, которая увеличивает счетчик и обновляет JSON файл.