# Full Stack Web app

## References
Refrences used:
- https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0
- https://medium.com/devnetwork/mevn-stack-application-part-2-2-9ebcf8a22753
- https://zellwk.com/blog/crud-express-mongodb/
- https://www.youtube.com/watch?v=Fa4cRMaTDUI
- https://forum.vuejs.org/t/how-to-format-date-for-display/3586/3
- https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb

## Used technologies
- MongoDB + Mongoose: local user management and bookmarked articles
- Vue.js
- Node.js + Express.js
- NEWS API: https://newsapi.org/

## Usage
Run ```npm install``` in both client/ and server/ folder

Running clientside: ```npm run start``` in the client folder.
Running serverside: ```npm run start``` in the server folder.

## Features
- Displaying 20 newest articles from a certain country
- Overview of all countries
- Option to view article on source website
- Bookmarking articles and displaying those articles (saved in the MongoDB)
- Filtering articles based on their description
- Overview of sources and filter them by category
- View news from each source