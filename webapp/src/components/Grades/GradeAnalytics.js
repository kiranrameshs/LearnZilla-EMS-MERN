import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar from '../NavBar';

import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class GradeAnalytics extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        let scores = [93, 95, 84, 100, 76, 80]; //this.props.Scores 
        let categories = ['Assign1', 'Assign2', 'Assign3','4','5','6'] //this.props.categories 
        let options = {
            chart: {
              type: 'spline'
            },
            title: {
              text: 'Scores'
            },
            xAxis: {
                categories: categories
            },
            series: [
              {
                data: scores
              }
            ]
          };
        return(
            <>
            <NavBar />
            <div className="chart">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            
            </>
            


        );
      
    }
}

export default GradeAnalytics