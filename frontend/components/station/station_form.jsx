import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';

class StationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      station_name: '',
      description: '',
      imageFile: null,
      imageUrl: null,
      imageLoaded: false
    };
  }

  componentDidMount() {
    if (this.props.match.params.stationId) {
      this.props.fetchStation(this.props.currentUser.id,
        this.props.match.params.stationId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.station);
  }

  update(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    };
  }

  updateFile(event) {
    let file = event.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
      this.setState({
        imageLoaded: true
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("station[station_name]", this.state.station_name);
    formData.append("station[description]", this.state.description);
    const station = Object.assign({}, this.state);
    let file = this.state.imageFile;
    if (file) {
      formData.append("station[image]", this.state.imageFile);
    }
    if (this.state.id) {
      formData.append("station[id]", this.state.id);
    }
    if (!this.state.id) {
      this.props.action(this.props.currentUser.id, formData).then(() => this.props.history.push(`/stations/`));
    } else {
      this.props.action(this.props.currentUser.id, formData).then(() => this.props.history.push(`/stations/${station.id}`));
    }
  }

  render() {
    const text = this.props.formType === 'new' ? "Create Station" : "Update Station";
    let image;
    if (this.state.imageLoaded) {
      image = <img id="form-preview" src={this.state.imageUrl}/>;
    } else {
      image = <img/>;
    }
    if (this.props.location.pathname === '/stations/new') {
      return (
        <div id="form-container">
          <h1 id="form-header">{text}</h1>
          <form id="form-submit" onSubmit={this.handleSubmit}>
            <div id="form-name">Station Name:</div>
              <input
                type="text"
                onChange={this.update('station_name')}
                id="form-input"
                />
            <div id="form-description">Description:</div>
              <textarea
                onChange={this.update("description")}
                id="form-textarea"
                />
              <div id="form-image">Image Upload:</div>
              <input
                type='file'
                onChange={this.updateFile}
                id="form-input-image"
                />
            <Link to={'/stations'}>
              <button id='form-cancel'>Cancel</button>
            </Link>
             &nbsp;
             &nbsp;
            <input id="form-button" type="submit" value='Save'/>
            {image}
          </form>
        </div>
      );
    }
    return (
      <div id="form-container">
        <h1 id="form-header">{text}</h1>
        <form id="form-submit" onSubmit={this.handleSubmit}>
          <div id="form-name">Station Name:</div>
            <input
              type="text"
              value={this.state.station_name}
              onChange={this.update('station_name')}
              id="form-input"
              />
          <div id="form-description">Description:</div>
            <textarea
              value={this.state.description}
              onChange={this.update("description")}
              id="form-textarea"
              />
            <div id="form-image">Image Upload:</div>
            <input
              type='file'
              onChange={this.updateFile}
              id="form-input-image"
              />
          <Link to={`/stations/${this.state.id}`}>
            <button id='form-cancel'>Cancel</button>
          </Link>
           &nbsp;
           &nbsp;
          <input id="form-button" type="submit" value='Save'/>
          {image}
        </form>
      </div>
    );
  }
}

export default StationForm;
