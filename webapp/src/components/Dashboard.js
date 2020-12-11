import React from 'react'
import NavBar from './NavBar'
import SidePanel from './SidePanel'
import CourseContainer from './CourseContainer'
import './../styles/Modules/CourseCards.scss'

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        //should replace this hardcoded with a fetch API 
        this.state = {
            User: "User1",
            Role: "Student",
            Courses: [
              {
                id:1,
                title: "Web Design",
                FinalGrade: "A"
              },
              {
                  id:2,
                  title: "Cloud Computing",
                  FinalGrade: "A-"
              }]
        }
    }


    openCourseDetails = (Course) => {

        //invoke display component
        console.log(Course);
    }

    render()
    {
        const getCourseArray = this.state.Courses;

        return (
            <>
            <NavBar/>
            {/* <div className={`gridOf${getCourseArray.length}`}> */}
            <div className="gridOf4">

            <CourseContainer   getCourseArray={getCourseArray} openCourseDetails={this.openCourseDetails} />
            </div>
            <SidePanel />
            </>
        )
    }
    
}

export default Dashboard 