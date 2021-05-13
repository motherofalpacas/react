import logo from './main.png';
import './App.css';
import data from './data';

function item() {
  console.log(data);
  return (
      { 
      data.map(itm =>{
        console.log(itm);
        const val = itm?.kindergarten?.name;
        return <div key={itm.id}>{val}</div>
      })
      }
   
  );
}

export default item;

