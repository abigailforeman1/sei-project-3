// This search page is for finding users to work on your project and/or projects to get involved with
// The left side will show a search form and the right side will display the appropriate results as the user searches 
// The user will then be able to navigate to the project pages and user pages that are displayed by clicking on them 

import React from 'react'
import axios from 'axios'
// import SearchCardUser from './SearchCardUser'
// import SearchCardProject from './SearchCardProject'
import UserCard from '../users/UserCard'
import ProjectCard from '../projects/ProjectCard'
import SearchFormType from './SearchFormType'
import SearchFormProject from './SearchFormProject'
import SearchFormUser from './SearchFormUser'
import { professions, skills, levels } from '../../../config/environment'

class Search extends React.Component {
  state = {
    formData: {
      searchingFor: ''
    },
    projectForm: {
      lookingFor: [''],
      skillsInvolved: [''],
      location: '',
      recruiting: false,
      name: ''
    },
    userForm: {
      name: '',
      username: '',
      level: [''],
      professions: [''],
      skills: [''],
      location: ''
    },
    projects: [],
    users: []
  }

  // maping through the professions and skills array and creating objects of each one to use in select form
  professionOptions =
    professions.map(item => {
      return (
        { value: item, label: item }
      )
    })

  skillsOptions =
    skills.map(item => {
      return (
        { value: item, label: item }
      )
    })

  levelOptions =
    levels.map(item => {
      return (
        { value: item, label: item }
      )
    })

  async componentDidMount() {
    try {
      const res = await axios.get('/api/users')
      const res2 = await axios.get('/api/projects')
      this.setState({ users: res.data, projects: res2.data })
    } catch (err) {
      console.log(err)
    }
  }

  // this is handling the change in the first checkbox form (looking for creatives/users)
  handleChange = ({ target: { name, value, checked, type } },stateType) => {
    const newValue = type === 'checkbox' ? checked : value
    const newData = { ...this.state[stateType], [name]: newValue }
    this.setState({ [stateType]: newData })
  }

  // this is handling the multichange in the first form select 
  handleMultiChange = (selected,formType,formName) => {
    const lookingFor = selected ? selected.map(item => item.value) : []
    const newData = { ...this.state[formType], [formName]: lookingFor }
    this.setState({ [formType]: newData  })
  }

  

  render() {
    const { formData, projectForm, userForm } = this.state
    return (
      <>
        <section className="border1 is-fullheight-with-navbar">
          <div className="hero-body columns is-fullwidth">
            <div className='column testJ is-three-quarters-mobile is-half-tablet is-one-third-desktop box'>
              {/* this section is for the search form */}
              {/* this section (formData in state) will show first to check if you're looking for projects or creatives */}
              <SearchFormType
                formData = { formData }
                handleChange={this.handleChange}            
              />

              {/* this section (projectForm in state) will appear only if you select that you're looking for projects */}
        
              {this.state.formData.searchingFor === 'projects' && 
                <SearchFormProject
                  handleChange={this.handleChange}
                  handleMultiChange={this.handleMultiChange}
                  projectForm = { projectForm }
                  professionOptions = {this.professionOptions}
                  skillsOptions = { this.skillsOptions}
                />
              }

              {/* this section (userForm in state) will appear only if you select that you're looking for creatives */}
        
              {this.state.formData.searchingFor === 'users' && 
              <SearchFormUser
                handleChange={this.handleChange}
                handleMultiChange={this.handleMultiChange}
                userForm = { userForm }
                professionOptions = {this.professionOptions}
                skillsOptions = { this.skillsOptions}
                levelOptions= { this.levelOptions}
              />
              }
            </div>

            {/* This is the project card. It only shows if project is selected or nothing is selected*/}
            { (!this.state.formData.searchingFor || this.state.formData.searchingFor === 'projects') &&
              <div className='column testJ box'>
                <div>           
                <>
                <h2>Projects</h2>
                {this.state.projects.filter(i => {
                  return (
                    new RegExp(this.state.projectForm.name,'i').test(i.name) &&
                    new RegExp(this.state.projectForm.location,'i').test(i.location) &&
                    (!this.state.projectForm.recruiting || (this.state.projectForm.recruiting === true && i.recruiting === true)) &&
                    (!this.state.projectForm.lookingFor[0] || this.state.projectForm.lookingFor.some(item => i.lookingFor.indexOf(item) >= 0)) &&
                    (!this.state.projectForm.skillsInvolved[0] || this.state.projectForm.skillsInvolved.some(item => i.skillsInvolved.indexOf(item) >= 0))
                  )
                })                        
                  .map((i,ind) => {
                    return (
                    // <SearchCardProject key={i + ind} {...i} />
                      <ProjectCard key={i + ind} {...i} />
                    )
                  })}
                </>
                </div>
              </div>
            }

            {/* This is the user card. It only shows if user is selected or nothing is selected*/}
            { (!this.state.formData.searchingFor || this.state.formData.searchingFor === 'users') &&
            <div className='column testJ box'>
              <div>           
            <>
            <h2>Users</h2>
            {this.state.users.filter(i => {
              const skillArray = i.skills.map(item => item.skill)
              return (                
                new RegExp(this.state.userForm.name,'i').test(i.name) &&
                new RegExp(this.state.userForm.location,'i').test(i.location) &&
                new RegExp(this.state.userForm.username,'i').test(i.username) &&
                (!this.state.userForm.level[0] || this.state.userForm.level.some(item => i.level.indexOf(item) >= 0)) &&
                (!this.state.userForm.professions[0] || this.state.userForm.professions.some(item => i.professions.indexOf(item) >= 0)) &&
                (!this.state.userForm.skills[0] || this.state.userForm.skills.some(item => skillArray.indexOf(item) >= 0))
              )
            })
              .map(i => {
                return (                  
                  // <SearchCardUser key={i.username} {...i} />
                  <UserCard key={i.username} {...i} />
                )
              })}

            </>
              </div>
            </div>
            }
              
          
          
          
          
          
          
          
            {/* This is the end of the hero */}
          </div>
        </section>
      </>
       




    )
  }

}

export default Search