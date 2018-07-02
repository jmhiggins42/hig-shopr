import React from 'react';
import LibraryGames from '../components/LibraryGames';
import LibraryForm from '../components/LibraryForm';
import { getAllLibrary, create, update, _delete } from '../services/libraryService';
import { arrToObj } from '../helpers/utilities';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: {},
      formData: null
    };
  }

  async componentWillMount() {
    const library = await getAllLibrary().then(data => data.items);
    this.setState({ library: arrToObj(library) });
  }

  onSelect = game => this.setState({ formData: game });

  onAddNew = () => this.setState({ formData: {} });

  onDelete = (e, id) => {
    e.stopPropagation();

    _delete(id)
      .then(() => {
        this.setState(prevState => {
          const library = arrToObj(
            Object.values(prevState.library).filter(game => game._id !== id)
          );
          return { library };
        });
      })
      .catch(err => alert(('Error!', err)));
  };

  onSubmit = game => {
    if (game._id) {
      update(game)
        .then(() => {
          this.setState(prevState => {
            const library = Object.assign({}, prevState.library, { [game._id]: game });
            return { library, formData: null };
          });
        })
        .catch(err => alert('Error!', err));
    } else {
      create(game)
        .then(id => {
          this.setState(prevState => {
            const library = Object.assign({}, prevState.library, { [id]: game });
            return { library, formData: null };
          });
        })
        .catch(err => alert(('Error!', err)));
    }
  };

  onCancel = () => this.setState({ formData: null });

  render() {
    return (
      <div className="row">
        <LibraryGames
          onSelect={this.onSelect}
          onAddNew={this.onAddNew}
          onDelete={this.onDelete}
          games={Object.values(this.state.library)}
        />
        {this.state.formData && (
          <LibraryForm
            formData={this.state.formData}
            onSubmit={this.onSubmit}
            onCancel={this.onCancel}
          />
        )}
      </div>
    );
  }
}

export default Library;
