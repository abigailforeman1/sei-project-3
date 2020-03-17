![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# General Assembly Project 3: Beehive

## Goal:
Build a full-stack application with React and an Express API.

## Timeframe:
8 days

## Team mates:
* [Jos Bogan](https://github.com/JosBogan/)
* [John Magnus Robertson](https://github.com/jaymagrob/)
* [Nicolas Dolan](https://github.com/Nicolas-Dolan)

## Technologies used:
* HTML5
* SCSS & Bulma
* JavaScript
* React.js
* Node.js
* Express.js
* MongoDB
* Insomnia
* Mocha & Chai
* GitHub
* Cloudinary

## Deployment:
This game has been deployed on Heroku and can be found here: https://beehive-project-3.herokuapp.com/

## Getting started:
Use the clone button to download the source code. In the terminal enter the following commands:

```
<!-- To install all the packages listed in the package.json: -->
$ yarn
<!-- Run the app in your localhost: -->
$ yarn start
<!-- Check the console for any issues and if there are check the package.json for any dependancies missing  -->
```

## Brief:
In groups of 4 we had to plan, build, style and test a full-stack MERN application. This included a React frontend that communicated with our backend express API built with MongoDB. We also had to write automated tests for at least one RESTful resource on the back-end.

This was my third project while on General Assembly’s SEI course.

## User experience:
Beehive is a creative collaboration website that allows users within the creative industry to register for an account, create a personal portfolio, upload projects they are working on, search for other creatives, request to collaborate on projects and chat with other users. We took heavy inspiration for this project from [The Dots](https://the-dots.com/) which is a website I have used for a number of years. 

1. Homepage, register & login

The landing page of our website allows uers to register or start discovering creatives and projects. They can also use the 'start your journey' link in the navbar which takes them to the main search page. We wanted to give an unregistered user enough functionality to show them what Beehive is all about and encourage them to register for an account. Once a user registers, they are taken directly to the login page. When they log in for the first time the user will see a unique welcome page with extra informayion to improve their experience of our site.

![video of homepage](https://github.com/abigailforeman1/sei-project-3/blob/master/src/assets/beehive2.gif)

![screenshot of the beehive register page](https://github.com/abigailforeman1/sei-project-3/blob/master/src/assets/beehiveregister.png)

2. Search page 

One of the main features of Beehive is the dynamic search page. Here users are able to specify exactly what they are looking for on the left side of the site and results fitting this criteria get filtered down and displayed on the right side. 

![screenshot of the beehive search page](https://github.com/abigailforeman1/sei-project-3/blob/master/src/assets/beehivesearch.png)

3. Portfolio page

Every user gets their own portfolio page once they register to Beehive. This shows information about their skills, experience, projects and personal information. Logged in users are able to endorse other users skills and leave them a message in the chat feature. When a user is logged in they will also see an edit button on their own portfolio where they can change information currently stored in our database.

![screenshot of the user profile page](https://github.com/abigailforeman1/sei-project-3/blob/master/src/assets/profilepage.png)

4. Project page

Each project has its own page where users can like, comment and request to join the project/add other users. Users are also able to enter a private collaborator message board if they are already part of the project and edit a project if they are the owner. When a user uploads their own project they are able to select if they are looking for collaborators and specify what skills are needed.

![screenshot of the user profile page](https://github.com/abigailforeman1/sei-project-3/blob/master/src/assets/project.png)

5. Chat feature

Logged in users can leave a message to any other user on Beehive by clicking the message button on their porfolio. When the messaged user next logs in they will recieve a notification in their mail.

![screenshot of the messaging](https://github.com/abigailforeman1/sei-project-3/blob/master/src/assets/chat.png)

6. Collaboration requests

When a user requests to join a project or add a user to their own project it sends a request notification to be accepted or rejected by the other user. Once accepted, the project will then appear on the users portfolio page.

![screenshot of requests](https://github.com/abigailforeman1/sei-project-3/blob/master/src/assets/requests.png)

## My contributions

## Challenges and future improvements:



