import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data)
  const clearAll = () => {
    setPeople([])
  }
  return <main><section className="container">
  <h3>{people.length} birthdays today</h3>
  {people.map((person) => {
    const {id, name, age, image} = person;
    return <article key={id} className="person">
    <img src={image} className='img'></img>
    <div>
    <h4>{name}</h4>
    <p>{age} years</p>
    </div>
    </article>
  })}
  <button type="button" className="btn btn-block" onClick={clearAll}>Clear all</button>
  </section>
  </main>;
};
export default App;
