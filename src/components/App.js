import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Navbar from "./Navbar";
import Main from "./Main";
import { connect } from "react-redux";
import { initSubredditsFetch, selectSubredditType } from "../store/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedFilter, loading } = this.props;
    if (loading) {
      return;
    }

    dispatch(initSubredditsFetch(selectedFilter));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedFilter !== prevProps.selectedFilter) {
      const { dispatch, selectedFilter, loading } = this.props;
      if (loading) {
        return;
      }
      dispatch(initSubredditsFetch(selectedFilter));
    }
  }

  handleFilterSelect(selectedFilter) {
    console.log(selectedFilter);
    this.props.dispatch(selectSubredditType(selectedFilter));
  }

  render() {
    const { loading, error, entities, filters, selectedFilter } = this.props;

    return (
      <React.Fragment>
        <Navbar />
        <Main
          loading={loading}
          entities={entities}
          filters={filters}
          error={error}
          selectedFilter={selectedFilter}
          onSelectFilter={this.handleFilterSelect}
        />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  entities: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  filters: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { filters, entities } = state;
  const { loading, itemsList, error } = entities;
  const { itemsMap, selected } = filters;
  return {
    loading,
    error,
    filters: Object.values(itemsMap),
    entities: itemsList,
    selectedFilter: selected
  };
}

export default connect(mapStateToProps)(App);
