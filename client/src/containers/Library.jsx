import React from 'react';
import { getAllLibrary } from '../services/libraryService';
import { arrToObj } from '../helpers/utilities';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: {}
    };
  }

  async componentWillMount() {
    const library = await getAllLibrary().then(data => data.items);
    this.setState({ library: arrToObj(library) });
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <h1>Library</h1>
        </div>
      </div>
    );
  }
}

export default Library;
