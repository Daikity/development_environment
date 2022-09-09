# Балансировка сельхоз. техники

1. [Подготовка](#Preparation)
 + [Начало разработки](#StartOfDevelopment)
 + [Ссылки на проект в системе](#LinksInSystem)
 + [Запуск локального проекта](#LaunchingLocalProject)
 + [Завершение разработки](#CompletionOfDevelopment)

## Подготовка <a name="Preparation"></a>

|      Для разработки вам понадобится    |                        Ссылки                      |
|----------------------------------------|:---------------------------------------------------|
| Среда разработки (или любую другую)    | [VSCode](https://code.visualstudio.com/)           |
| Пакетный менеджер                      | [Nodejs](https://nodejs.org/ru/)                   |
| Система контроля версий                | [Git](https://git-scm.com/)                        |
| После чего, установите все зависимости | В командной строке запустите команду `npm install` |

### Начало разработки <a name="StartOfDevelopment"></a>

Если вы используете VSCode, могу посоветовать некоторые расширения, которые будут помогать в ходе разработки.

**Вспомогательные**

1. Russian Language Pack
2. GitHub Theme (на вкус и цвет)
3. Auto Close Tag
4. Auto Rename Tag
5. Auto Import
6. Color Highlight
7. GitLens

**Для ускорения работы**

1. Tabnine AI Autocomplete
2. Vetur

### Запуск локального проекта <a name="LinksInSystem"></a>

Вам должны были выдать доступ к VPN и прежде чем запустить проект, выполните соединение.

После того, как подключитесь можно выполнить команду `npm run dev`

В командной строке вы увидите сборку проекта и по завершению отобразится [ссылка на проект](http://localhost:8080/sap/bc/ui5_ui5/sap/zmob004_cpi_vue/)

Открыв страницу отобразится окно авторизации, в котором нужно указать УЗ от аккуанта в тестовой системе `FE1`

### Завершение разработки <a name="LaunchingLocalProject"></a>

После того, как работы будут завершены вам нужно будет выгрузить его на сервер.

Сначала выполнить команду `npm run lint`. Это выровняет все строки в читабельный вид.

Далее команда `npm run deploy` минифицирует все файлы, соберет проект и выгрузит его на сервер. Выгружено будет содержимое папки `dist`. Она соберется в ходе выгрузки.

```
Обратите внимание. В корне есть файл .nwabaprc. 
Этот файл отвечает за настройки для подключения к серверу.
В нем описаны данные авторизации, запрос, пакет, bsp приложение и т.д.
```

### Ссылки на проект в системе <a name="CompletionOfDevelopment"></a>

- [Тестовая система](https://srvsap83.rainvest.local:44300/sap/bc/ui5_ui5/sap/zmob004_cpi_vue/) `FE1`
- [Прод система](https://srvsap85.rainvest.local:44300/sap/bc/ui5_ui5/sap/zmob004_cpi_vue/) `FE3`

### Управление версиями

- `main` прод ветка.
- `test` ветка тестирования.
- `dev` ветка разработки.
- `hotfix` ветка для оперативного исправления критических ошибок в проде.

Вся разработка ведется в ветке `dev`.
Поступающие задачи необходимо ответвить от неё и по завершению сделать `merge` в неё.
В промежуточном тестирование выгружаем именно её. Если ведется коллективная разработка
не забудьте **сообщите команде чтоб выполнили `git pull` ветки `dev`**, дабы избежать
траты времени на исправление конфликтов.

**После того, как дали добро на выгрузку в прод:**

1. Делаем `merge` ветки `dev` в `test` написав осмысленный коммит исходя из названия основной задачи.
2. Затем выгружаем `test` в тестовую систему `FE1`.
3. Ожидаем, пока тестировщик выполнит контрольное тестирование.
   - Если тестирование прошло успешно, делаем `merge` ветки `test` в `main`.
   - Если тестирование не прошло, возвращаемся в ветку `dev`, производим исправление ошибок, и снова делаем `merge` ветки `dev` в `test`.
4. После чего начинаем процесс переноса в прод.
   - производим `merge` ветки `test` в ветку `main`.
   - выгружаем `main` в систему `FE1`.
   - создаем запрос на перенос в систему `FE3`.
   - запускаем перенос запроса.

**Если возникла критическая ошибка в проде, которую нужно оперативно исправить производим следующий алгоритм:**

1. Ветвим ветку `main` в `hotfix`.
2. Выполняем исправление
3. После чего делаем выгружаем `hotfix` в `FE1`. Тестировщик смотрит, устранена ли ошибка.

- Если нет возвращаемся в `hotfix` дорабатываем, пока не подтвердят исправление.
- Если всё хорошо. `hotfix` выгружаем в `test`, делаем deploy в `FE1`, контрольные тест и сразу запрос переносим в `FE3`.
- Далее спокойно делаем `merge` ветки `test` в `main` и в `dev`. В случае конфликтов, устраняем и продолжаем дальнейшую разработку.
- **Не забываем сообщить команде об изменениях.**
