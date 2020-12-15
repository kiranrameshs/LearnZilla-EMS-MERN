import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar from '../NavBar';
import FeedBack from './AssignFeedback';
import GradeAnalytics from './GradeAnalytics';
import { Link } from 'react-router-dom';


import { connect } from 'react-redux';
import { getCourseAssigns } from '../../store/actions/grade.action';
//import { getAvailableCourseAssigns } from '../../store/selectors/grade.selectors';


class CourseAssignScores extends Component {

  // constructor(props){
  //   super(props);
  //   console.log(props.location.state.courseAssigns);
  //   this.state = { courseAssigns : props.location.state.courseAssigns}

  // }

  constructor(props) {
    super(props);

    console.log(this.props)
}

  componentDidMount() {
    let assigns = ["5fd3b55b14fb9961d1b2857d","5fd3e6120706e37d3720cbdf"]//this.props.courseAssigns;
    assigns.map((aID)=>{
      this.props.getCourseAssigns(aID);
    });
    
  }

  // handleClick = (event) => {

  //   if (event.target.classList.contains('glyphicon-signal')) {
  //     const itemKey = event.target.id;

  //     let data ={};
  //     data.scores = this.props.courseAssignScores.filter(x=>x.id != "").map( (x)=>{ return x.assignmentscrore});
  //     data.categories = this.props.courseAssignScores.filter(x=>x.id != "").map( (x)=>{ return x.assignmentname}); 
  //     this.props.history.push('/analytics');
  //     //navigate to analytics passing data as props
  //     return (
  //       <GradeAnalytics data={data}/>
  //     );
       
  //   }
  //     switch(event.target.id){
  //         default:
  //         break;
  //     }

  // }

  render() {
    let homeWorks = this.props.courseAssignScores.filter(x=>x.id != "");//   bordered
    let data ={};
    data.scores = this.props.courseAssignScores.filter(x=>x.id != "").map( (x)=>{ return x.assignmentscrore});
    data.categories = this.props.courseAssignScores.filter(x=>x.id != "").map( (x)=>{ return x.assignmentname});
    return (
      <>
        <NavBar />
        <>
         <div> 
         {/* <a onClick={this.handleClick} className="btn btn-info btn-lg"> */}
         <Link to= {{
                        pathname: "/analytics",
                        aboutProps: {
                            data: data
                             }
                    }}>
                        <span className="glyphicon glyphicon-signal"></span> Analytics 
          </Link>
          
        {/* </a> */}
         </div>
          <Table responsive striped condensed hover>
            <thead>
              <tr>
                <th> </th>
                <th> Home Work </th>
                <th> Submitted On </th>
                <th> Score  </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {homeWorks.map((c) => {
                return <tr>
                  <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                  <td> {c.assignmentname}</td>
                  <td> {c.assignmentenddate}</td>
                  <td> {c.assignmentscrore}</td>
                  <td> <Button data-toggle="tooltip" data-toggle="modal" data-target="#feedbackModal" data-placement="bottom" title="See FeedBack"><span class="glyphicon glyphicon-comment"></span></Button> <Button> Add Sticky</Button>
                       <FeedBack />
                      
                  </td>
                </tr>

              })}
            </tbody>
          </Table></>


      </>
    );
  }

}

const reduxProps = state => {
  return ({
    courseAssignScores: state.grades.CourseAssigns //getAvailableCourseAssigns(state) 
  })
};

export default connect(reduxProps, { getCourseAssigns })(CourseAssignScores);