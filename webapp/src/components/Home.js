import React from 'react';


class Home extends React.Component {


    componentDidMount() {

    }

    render(){
      return (
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"> <span className="glyphicon glyphicon-education"></span> LearnZilla</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#"><span className="glyphicon glyphicon-home"></span> Who We Are</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="/login"><span className="glyphicon glyphicon-log-in"></span> LOG IN</a></li>
              </ul>
              
            </div>

          </nav>
          <section>
          
          </section>
          <div>
          <a class="twitter-timeline" href="https://twitter.com/kiranrs2?ref_src=twsrc%5Etfw">Tweets by kiranrs2</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      )
    }
}

export default Home;
