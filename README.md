# Dmitry Sinyavskiy Country Application

## Built with

<!-- ICONS found at: ht<rtps://github.com/devicons/devicon/tree/master/icons -->
<div> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="50" height="50"/>&nbsp;
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TS" alt="TS" width="50" height="50"/>&nbsp;
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JS" alt="JS" width="50" height="50"/>&nbsp;
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" title="Materialui" alt="Materialui" width="50" height="50"/>&nbsp;
</div>

- React application is written in Typescript
- The user interface is divided into pages that are routed through react-router-dom.
- Materialui is used for styling
- Tests are implemented with JavaScript language

## Installation

### NPM

1. You can run the application manually via `npm`

   Run this command in the terminal to be sure that you have an `npm` installed on your device

```sh
npm -v
```

2. Now you need to install `npm` packages for the project

```sh
npm install
```

3. When all is done you can run the application in development mode by running this command

```sh
npm run dev
```

4. Application will run on the ports:

   - http://localhost:5173

5. Or you can build the application and run it with the following command

```sh
npm run build
```

```sh
npm run preview
```

4. Application will run on the ports:

   - http://localhost:4173

## Functionalities and Usage

![Main Page](screenshots/mainPage_1.jpg)

- You can use the search field to search by country name

![Main Page search](screenshots/mainPage_search.jpg)

- Select a country to see more information about it

![Main Page select](screenshots/mainPage_select.jpg)

- Press the map button to open a new google maps tab with the country location

![Main Page select](screenshots/countryPage_1.jpg)

- You can sort countries by name, region, and population

![History page 1](screenshots/main_page_sort_1.jpg)

- The first press will activate sort by a-z, the second by z-a and the third will deactivate sorting

![History page 1](screenshots/main_page_sort_2.jpg)

- By pressing on Logo you will be redirected to this GitHub repository

## Testing

- To run tests, in the root folder where the file `package.json` is located, run this command in a terminal

```sh
npm test
```

![Npm tests](screenshots/test.jpg)
