import React, { Component } from 'react'
import axios from 'axios';
import githubLogo from './download1.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Profile from "./profile";



const Styles = theme => ({
  root: {
      margin: theme.spacing(1.5),
      width: '60ch',
      marginLeft:'30%'
  },
  btn:{
    margin: theme.spacing(1),
    padding:theme.spacing(2),
  }
});


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      profile: '',
      Repos:'',
      isProfileData:false
    }
  }
  handleChange = e => {
  const regex =/[A-Za-z]/
  const re = /^[0-9\b]+$/;
        
  if ((e.target.value === '' || regex.test(e.target.value)) || (e.target.value === '' || re.test(e.target.value))){
     this.setState({inputText: e.target.value})
  

}
}


  handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.get('https://api.github.com/search/users', {
      params: {
          q: this.state.inputText,

      },

  });
    console.log(response)
    // this.setState({ profile: response.data.items });
    const responseOfRepos = await axios.get(`https://api.github.com/users/${this.state.inputText}/repos`);
    console.log(responseOfRepos)
    this.setState({profile:response.data.items,Repos:responseOfRepos.data ,isProfileData:true})
    
}


    
  
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
      <div>
        {!this.state.isProfileData ?
        <div className="App">
          <div className="Logo">
            <img src={githubLogo} alt="logo" style={{paddingLeft: '26%',marginTop:"10%"}} />
          </div>
            <form>
        <TextField id="outlined-search" label="Github Username" variant="outlined" className={classes.root}
        onChange={this.handleChange}/>
    

          <Button variant="contained" color="primary" className={classes.btn} onClick={this.handleSubmit}disabled={!this.state.inputText}>
            Submit
          </Button>
          
          </form>
          </div> : 
        
          <Profile {...this.state} />
        }
        </div>
</React.Fragment>
     
    )
  }
}

export default (withStyles)(Styles)(HomePage);
