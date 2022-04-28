# MY TRAVEL APP

**Technologies Used**
- HTML5 (browser rendered home page)
- EJS (server rendered state and activity pages)
- CSS3
- JavaScript
- Node.js
- Mongoose
- Express

**Project Description** <br /> <br />
A trip management website, where you can plan and record your travels around the U.S. (restaurants, hotels, entertainment, etc.). You can track wishlist places as well as places visited, and add comments with your thoughts.
<br /> <br />
**Home Page:** <br />


**State Page:** <br />


**Activity Page - CRUD Activities:** <br />


**Activity Page - Filters & Google Maps Link:** <br />


**Access Site At Link Below** <br /> <br />
https://dml-mytravelapp.herokuapp.com/

**User Stories**
- As a user, I want to be able to select a state, and view my added activities for that state. 
- As a user, I want to be able to record if I have or plan to visit a state.
- As a user, I want to be able to view, add, edit, and delete activities. 
- As a user, I want to be able to apply filters to more easily view activities. 

**Original Wire Frame**
![image](https://media.git.generalassemb.ly/user/41174/files/3ad0fe80-9baf-11ec-8943-9cc7e04a6629)

**MVP Goals**
- [x] Have a home page where you can select and navigate to each of the individual state pages.
- [x] On the state page, have a section where you can perform full CRUD operations on lists of restaurants, hotels, and entertainment you'd like to go to.
- [x] Be able to add reviews. 
- [x] Be able to mark states as visited or want to visit.

**Stretch Goals**
- [x] Interactive map of the U.S. on the home page.
- [x] Use Bootstrap as a CSS framework.
- [x] Use the DOM to visually update want to visit / have visited states. 
- [x] Be able to filter lists by certain criteria.
- [ ] Incorporate a trip planner, where you can assign specific target items to specific dates.
- [ ] User creates a profile and is authenticated.

**Unsolved Problems / Major Hurdles**
- Besides the remaining stretch goals above, I would also like to make the app layout more mobile friendly, since it will most likely be used primarily on smartphones. 
- The most challenging part of the project was getting my filters to persist on the page even after performing CRUD actions and reloading the page. It took a lot of research to find the best way to handle translating the request query between the controller and EJS pages. 
