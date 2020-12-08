import React from 'react'
import NavBar from './NavBar'
import SidePanel from './SidePanel'
import CourseContainer from './CourseContainer'

class Dashboard extends React.Component {

    constructor(props){
        super(props);
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


    openCourseDetails = () => {

        console.log("get coursedetails clicked");
    }

    render()
    {
        const openCourseDetails = this.openCourseDetails;
        const getCourseArray = this.state.Courses;

        return (
            <>
            <NavBar/>
            <CourseContainer getCourseArray={getCourseArray} openCourseDetails={openCourseDetails} />
            <SidePanel />
            </>
        )
    }
    
}

export default Dashboard 