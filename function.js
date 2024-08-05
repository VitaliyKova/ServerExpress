const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "data.json");

const increment = function (route, callback) {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        const initialCounter = { [route]: 1 };
        fs.writeFile(dataPath, JSON.stringify(initialCounter), (err) => {
          err
            ? console.log("ошибка при создании файла:", err)
            : console.log("Файл создан с начальным значением");
        });
        callback(initialCounter[route]);
      } else {
        console.log("Ошибка при чтении файла", err);
      }
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      if (jsonData[route]) {
        jsonData[route]++;
        console.log('путь найден')
      } else {
        jsonData[route] = 1;
        console.log('путь создан')
      }
      fs.writeFile(dataPath, JSON.stringify(jsonData), (err) => {
        err
          ? console.log("Ошибка записи в файл")
          : console.log("файл успешно обновлен");
      });
      callback(jsonData[route]);
    } catch (parseErr) {
        console.error('Ошибка при парсинге JSON данных:', parseErr);
    }
  });
};

module.exports = { increment };