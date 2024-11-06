# Phase 2 Week 1 Code Challenge: Hog Wilds

## Author
David Ariwi

## Project Link
Link to the project: https://6728bcd35e986f723e176544--starlit-ganache-a29953.netlify.app/

## Description
This is a React application that displays a list of hogs (pigs) with various features. Users can view hog details, filter greased hogs, sort by name or weight, hide/show hogs, and add new hogs to the collection.

## Features
- Display hog tiles with name and image
- Show additional hog details on click:
  - Specialty
  - Weight
  - Greased status
  - Highest medal achieved
- Filter hogs by greased status
- Sort hogs by name or weight
- Hide/show functionality for hogs
- Form to add new hogs

## Project Structure
```
src/
│
├── components/
│   ├── App.css
│   ├── App.js
│   ├── Nav.js
│
├── assets/
│   └── porco.png
│
├── index.js
├── index.css
└── porkers_data.js
```

## Component Hierarchy
```
App
├── Nav
├── NewHogForm
└── HogList
    ├── FilterControls
    └── Hog
```

## Technologies Used
- React
- React Hooks (useState)
- Semantic UI CSS
- CSS for custom styling

## Setup Instructions
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## State Management
- App.js: Manages global hog list and form visibility
- HogList.js: Manages filter state, sort state, and hidden hogs
- Hog.js: Manages detail visibility state
- NewHogForm.js: Manages form input state

## Props and Callbacks
- Parent to Child: Data flows down through props
- Child to Parent: Data flows up through callback functions
- Components re-render through state updates

## License
This project is licensed under the MIT License