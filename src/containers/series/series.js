import React, { Component } from 'react';
import SeriesList from '../../components/seriesList/index';
import Loader from '../../components/Loader/Loader';

export class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  };

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        the length {this.state.series.length}
        <div>
          <input
            value={seriesName}
            type='text'
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === '' && (
          <p>please enter something</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== '' && (
          <p>not found</p>
        )}
        {isFetching && <Loader />}
        {!isFetching && <SeriesList List={this.state.series} />}
      </div>
    );
  }
}

export default Series;
