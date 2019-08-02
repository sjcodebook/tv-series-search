import React from 'react';
import './index.css';

const SeriesListItems = ({ series }) => (
  <li>
    <a href={series.show.url}>{series.show.name}</a>
  </li>
);
const SeriesList = props => {
  return (
    <div>
      <ul className='series-list'>
        {props.List.map(series => (
          <SeriesListItems series={series} key={series.show.id} />
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
