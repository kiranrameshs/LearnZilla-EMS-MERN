import React from 'react'
import NavBar from './NavBar'
import SidePanel from './SidePanel'
import CourseContainer from './CourseContainer'

class Dashboard extends React.Component {

    openCourseDetails = (courseId) => {
        //uses a fetch get request to dplay the course details
        // writing a dummy return statement for now
        console.log("get coursedetails clicked")
        return courseId + " " + "CourseDetails"  ;
    }



    render(){

        const openCourseDetails = this.openCourseDetails;
        const studentID = this.props.studentID;

        return (
            <>
            <NavBar/>
            <CourseContainer openCourseDetails={openCourseDetails} studentID={studentID}  />
            <SidePanel />
            </>
        )
    }
    
}

export default Dashboard 