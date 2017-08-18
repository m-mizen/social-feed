import { h, render, Component } from 'preact';
import  GridItem from './GridItem.js';
import  Modal from './Modal.js';
// Grid Component
class Grid extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalData: {}
    }
  }
  // Output the posts
  _posts(){
    const items = [];
    this.props.posts.forEach( (val, i)=>{
      items.push( <GridItem key={i} data={val} onClick={()=>{this._modalLoad(val)}}></GridItem> );
    });
    return items;
  }

  _modalLoad(data){
    if (data){
      this.setState({modalData: data});
    }
  }

  _modalHide(){
    this.setState({modalData: {}});
  }

  render(props) {
    return (
      <div>
        <div class="grid-container">
          { this._posts() }
        </div>
        <div>
          <Modal data={this.state.modalData} close={()=>{this._modalHide()}} />
        </div>
      </div>
    );
  }
}

export default Grid;