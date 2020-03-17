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

1. Planning & styling

I was in charge of planning the front end of the site and drew wireframe sketches to help organise what features would go where and what api endpoints we needed. I also created the visual identity of the website in Adobe Illustrator for the team to follow. This sped up styling considerably and meant we had more time for testing and adding our 'nice to haves'.

![screenshot of sketches](https://github.com/abigailforeman1/sei-project-3/blob/master/src/assets/planning.png)

![screenshot of design](https://github.com/abigailforeman1/sei-project-3/blob/master/src/assets/design.png)

2. Backend project & user models

I built the backend models for both user and project using Mongoose Schema. This involved creating fields to store users skills and professions that were stored as an array in the project environment and building virtual schemas for likes, comments and project requests.

```javascript
const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  collaborators: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  description: { type: String, required: true },
  location: { type: String },
  images: [{ type: String }],
  completed: { type: Boolean, required: true },
  recruiting: { type: Boolean, required: true },
  skillsInvolved: [{ type: String, enum: skills }],
  lookingFor: [{ type: String, enum: professions }], 
  likes: [ likeSchema ],
  comments: [ commentSchema ],
  messages: [ messageSchema ]
}, {
  timestamps: true
})

projectSchema
  .virtual('likeCount')
  .get(function() {
    return this.likes.length
  })
  ```

3. Better error handling 

I added a function for better error handling to be able to troubleshoot our bugs more easily. This utilised an if statement to check the error name being delivered and returned a custom error message.

```javascript
function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {
    const customErrors = {}

    for (const key in err.errors) { 
      customErrors[key] = err.errors[key].message 
    }

    return res.status(422).json({ message: 'Unprocessable Entity', errors: customErrors })
  }

  if (err.message === 'Not Found') {
    return res.status(404).json({ message: 'Not Found' })
  }

  res.status(500).json({ message: 'Internal Server Error' })
  next(err)
}
```

4. Image upload component

I created a custom frontend image upload React component that we imported into 2 areas of the project - for user profile image and project hero image. This was linked to my Cloudinary account with a user key which was stored in a .env file. The component worked by setting state with the cloudinary URL from the uploaded image, then invoking the handleChangeImage prop function in the parent component with the image data as its arguments.

```javascript
  handleUpload = async ({ target: { files } }) => {
    const data = new FormData
    data.append('file', files[0])
    data.append('upload_preset', 'j7lqzji3')
    const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_USER_KEY}/image/upload`, data)
    this.setState({ image: res.data.url, original: files[0].name }, () => {
      this.props.handleChangeImage({ target: { name: this.props.fieldName, value: res.data.url } }) 
    })
  }
```

5. Frontend show pages 

I built out the frontend show pages for the user and project. This involved making a get request to the database for the correct information and displaying it in the most streamlined and clean way. 

```javascript
  <div className="column is-one-quarter">
    <div className="container">
      <div className="has-text-centered">
        <img className="profile-img" src={user.profileImage} />
      </div>
      <div className="has-text-centered add-margin">
        {this.isOwner() && <Link className="button" to={'/myportfolio/edit'}>Edit Portfolio</Link>}
        {!this.isOwner() && <button className="button" onClick={this.handleMessage}>Message {user.name}</button>}
      </div>
    </div>
  </div>

  <div className="column">
    <div className="columns">
      <div className="column is-three-quarters">
        <div className="subtitle-hero">
          <h1>{user.name}</h1>
        </div>
        <ul className="profession-parent">{user.professions.map(profession =>
          <li className="user-profession profession-grey-box" key={profession}>{profession}</li>)}
        </ul>
      </div>
      <div className="column">
        <div className="rounded-box">
          <p className="has-text-centered">{user.location}</p>
        </div>
        <div className="rounded-box">
          <p className="has-text-centered">{user.level}</p>
        </div>
      </div>
    </div>
```

## Challenges and future improvements:

- 
- css framework 

