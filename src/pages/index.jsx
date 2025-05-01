import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

//1. Do souboru index.jsx vložte mimo komponentu pole s názvy deseti největších českých měst.
const cities = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];

/*2. Z pole cities pomocí funkce map vyrobte pole JSX elementů. Každý JSX element nechť má následující strukturu.
<div className="city">Název města</div>
Výsledné pole uložte do proměnné cityElements.*/

//2.
const cityElements = cities.map((city) => <div className="city">Název města</div>);


//3. Použijte pole cityElements uvnitř komponenty JSX a zobrazte jej tak na vaší stránce.

//const cityElements = cities.map((city) => <div className="city" key={city}>{city}</div>);

/*const App = () => (
  <>
    <h1>Největší česká města</h1>
    <div>{cityElements}</div>
  </>
);*/

//4. Zbavte se proměnné cityElements a funkci map použijte přímo uvnitř komponenty JSX.
//(proměnná cityElements je odstraněna a metoda map je volána přímo v návratové části komponenty)
//5. key={city} - názvy měst, prtž jsou jedinečné

document.querySelector("#root").innerHTML = render (
  <div className="container">
    {cities.map((city)=> <div key={city} className="city">{city}</div>)}
  </div>
);


/*document.querySelector("#root") -jsx hledá HTML element s id="root", kt je definován v index.html
.innerHTML = render (..) přepisuje obsah #root pomocí funkce render
<div className="container"> - vytvoří kontejner pro všechna města
{cities.map((city) - prochází seznam měst cities, což je pole obsahující názvy různých měst
pro každý element vytvoří nový <div>element s třídou "city" a zobrazí v něm název města
key={city} - každé město dostává unikátní klíč(key)*/

