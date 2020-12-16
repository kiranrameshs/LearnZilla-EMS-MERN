import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar from '../NavBar';
import FeedBack from './AssignFeedback';
import GradeAnalytics from './GradeAnalytics';
import { Link } from 'react-router-dom';
import { Navbar,Nav, NavItem } from 'react-bootstrap' ;
import Sidebar from '../SideBar/SideBar';

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

   handleClick = (event) => {

   
    if (event.target.classList.contains('export')){
      this.exportTableToCSV();

    }

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

  }

  exportTableToCSV() {
    let filename = 'scores.csv';
    let csv = [];
    let rows = document.querySelectorAll("table tr");

    for (let i = 0; i < rows.length; i++) {
      let row = [];
      if (i > 0) {
        let cols = rows[i].querySelectorAll("td");
        for (let j = 0; j <= cols.length; j++) {
          if (j > 0) {
            cols = rows[i].querySelectorAll("td input");
            row.push(cols[j - 1].value);
          } else {
            row.push(cols[j].innerText);
          }
        }
      }
      else {
        let cols = rows[i].querySelectorAll("th");
        for (let j = 0; j < cols.length; j++) {
          row.push(cols[j].innerText);
        }
      }
      csv.push(row.join(","));
    }

    // Download CSV file
    this.downloadCSV(csv.join("\n"), filename);

  }

  //Export to CSV Functions
downloadCSV(csv, filename) {
  let csvFile;
  let downloadFile;

  // CSV file
  csvFile = new Blob([csv], {
      type: "text/csv"
  });
  if (navigator.msSaveBlob) {    
      navigator.msSaveBlob(csvFile, filename);
  }
  else
  {
      downloadFile = document.createElement("a");      // Download link
      downloadFile.download = filename;// File name    
      downloadFile.href = window.URL.createObjectURL(csvFile);// Create a link to the file    
      downloadFile.style.display = "none";// Hide download link    
      document.body.appendChild(downloadFile);// Add the link to DOM   
      downloadFile.click(); // Click download link
  }
}
  

  render() {
    //pass scores to analytics tab
    let homeWorks = this.props.courseAssignScores.filter(x=>x.id != "" && x["message"] != "assignment not present");//   bordered
    let data ={};
    data.scores = this.props.courseAssignScores.filter(x=>x.id != "").map( (x)=>{ return x.assignmentscrore});
    data.categories = this.props.courseAssignScores.filter(x=>x.id != "").map( (x)=>{ return x.assignmentname});
    return (
      <>
        <NavBar />
        <Navbar className="sidebar">
              <Navbar.Collapse>
                <Sidebar />
              </Navbar.Collapse>
        </Navbar>
        <>
        <a onClick={this.handleClick} href="#" class="btn btn-info btn-lg export">
          <span class="glyphicon glyphicon-download-alt"></span> Export
        </a>
         <div className="btn btn-info btn-lg analytics"> 
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
         <br />
         <h1>Assignment Scores</h1>
         <div className="assignTable">
         <Table responsive striped condensed hover >
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
          </Table>

         </div>
         </>


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