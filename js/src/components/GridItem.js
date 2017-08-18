import { h, render, Component } from 'preact';
// Item component
class GridItem extends Component {
  _classes(){
    const classNames = [];
    classNames.push('post')
    classNames.push( this.props.data.network_name.toLowerCase() );

    if (this.props.data.has_video)
      classNames.push('video');

    return classNames.join(' ');
  }

  _handleKeypress(event){
    if(event && event.key == 'Enter'){
      event.target.click();
    }
  }

  render(props) {
    return <div 
      tabIndex="0"
      role="button"
      onClick={this.props.onClick}
      onKeyPress={this._handleKeypress}
      class={this._classes()} 
      id={ 'post-' + this.props.data.id }
      style={ 'background-image: url(' + this.props.data.image + ');' }>
      <div class="title">{this.props.data.text}</div>
    </div>;
  }
}
export default GridItem;