import { h, render, Component } from 'preact';
import  Grid from './Grid.js';

const baseUrl = 'https://api.curator.io/v1';
const apiKey = '605bb467-850e-44e4-9b4d-b1b8e74c509d';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    this._get_posts();
  }

  async _get_posts(){
    try{
      const response = await fetch( baseUrl + '/feeds/3C173A0C-4FAB-47C9-A085-1DD3F9F2/?api_key=' + apiKey, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          'Accept': 'application/json',
        })
      });
      const data = await response.json();
      this.setState({posts: data.posts});
      
    } catch (e){
      throw new Exception(e);
    };
  }

  render(props) {
    return <div id="app-body">
      <Grid posts={this.state.posts}/>
    </div>;
  }

}

export default App;