import React from 'react';
import './App.css';

import Banner from './components/banner/banner.component';
import UpdateBanner from './components/update-banner/update-banner.component';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      heading: 'Install our application',
      description: 'It offers great performance & does not take any extra space',
      bgcolor: '#9013FE',
      textcolor: '#ffffff',
      install_button: 'Install Now'
    }
  }


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });

  }
  
  render() {
    const { heading, description, install_button, bgcolor, textcolor} = this.state;
    return(
      <div className='banner-page'>
        
          <UpdateBanner heading = {heading}  description= {description} bgcolor= {bgcolor} textcolor={textcolor} install_button={install_button} handleChange={this.handleChange}/>
          <Banner heading = {heading}  description= {description} bgcolor= {bgcolor} textcolor={textcolor} install_button={install_button}/>
       
      </div>
    );
  }
}

export default App;
