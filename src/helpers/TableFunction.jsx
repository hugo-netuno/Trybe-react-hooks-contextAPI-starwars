import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableFunction = () => {
  const { filterName, data, planetasSort } = useContext(StarWarsContext);
  console.log(planetasSort);
  return (
  planetasSort.filter((planets) => (filterName !== '' ? planets.name.toLowerCase().includes(filterName) : data)).map(
    (planet) => (
      <tr key={planet.name}>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>
          {planet.films.map((film) => (<span key={film}>{film}</span>))}
        </td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    ),
  ));
};

export default TableFunction;
