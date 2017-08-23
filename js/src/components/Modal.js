import { h, render, Component } from 'preact';


class Modal extends Component{
  _modalContent(data){
    switch(data.network_id){
      case 8:
        return <div class="iframe-wrap">
          <iframe 
            width="560" 
            height="315" 
            src={'https://www.youtube.com/embed/' + data.source_identifier + '?rel=0&amp;showinfo=0&amp;autoplay=1'} 
            frameborder="0" 
            allowfullscreen></iframe>
          </div>;
        break;

      default:
        return null;

    } 
  }

  render(props){
    if (!this.props.data || !this.props.data.source_identifier){
      return null;
    } else {
      return <div class="modal-wrap" onClick={this.props.close}>
        <div className="modal-container" onClick={e=>{e.stopPropagation()}}>
          <div className="modal">
            { this._modalContent(this.props.data) }
          </div>
        </div>
      </div>;
    }
  }
}

export default Modal;