export const City = ({name, population, area}) => (
  <div key={name} className="city">
    <h2>{name}</h2>
    <p>Počet obyvatel: {population}</p>
    <p>Rozloha: {area} km3</p>
  </div>
)
