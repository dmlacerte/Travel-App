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
![home-page](https://user-images.githubusercontent.com/97196460/165792538-8978261e-261e-4aba-8bcc-93d99e4d3c1e.gif)

**State Page:** <br />
![state-page](https://user-images.githubusercontent.com/97196460/165793010-88065764-7e0c-43de-a73f-2befe59e2344.gif)

**Activity Page - CRUD Activities:** <br />
![activity-page-CRUD](https://user-images.githubusercontent.com/97196460/165793606-77c43cf2-9272-488e-a43f-477c99bbe77a.gif)

**Activity Page - Filters & Google Maps Link:** <br />
![activity-page-filters](https://user-images.githubusercontent.com/97196460/165793644-4d52d76a-0590-4291-a64b-17b1d0258a92.gif)

**Access Site At Link Below** <br /> <br />
https://dml-mytravelapp.herokuapp.com/

**User Stories**
- As a user, I want to be able to select a state, and view my added activities for that state. 
- As a user, I want to be able to record if I have or plan to visit a state.
- As a user, I want to be able to view, add, edit, and delete activities. 
- As a user, I want to be able to apply filters to more easily view activities. 

**Original Wire Frames**
![image](https://user-images.githubusercontent.com/97196460/165791642-64d8a58b-5789-4bb2-8f12-8930355efc47.png)

![image](https://user-images.githubusercontent.com/97196460/165791668-df3b4e9f-4768-409b-a6c3-ea15186c3b61.png)

![image](https://user-images.githubusercontent.com/97196460/165791715-953b1301-cc2c-4aa8-bfa3-5e888df1ed54.png)

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
