import React from 'react';
import './style.css'
import {districtdata} from './data'

export const Cards = () => {
  return (
    <div className="App">
        <div id="Cards">
        <div class="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="text-center">
            <div className="p-head">
              <strong >DISTRICTs & DIVISIONs OF Madhya Pradesh</strong>
            </div>
          </div>
          <div className="tabs-container">
            <ul className="tabs-menu">
              <li className="active">
                <a href="#">Districts</a>
              </li>
              <li>
                <a href="#">Divisions</a>
              </li>
            </ul>
            <div className="tab">
{/* //////////////////////////////////// */}

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

    {districtdata.map((val) => {
        return(

            <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        	<div class="relative flex items-end overflow-hidden rounded-xl ">
        	  <img src={val.imageurl} alt="wallpaper" className='w-full'/>
        	</div>

        	<div class="mt-1 p-2">
        	  <h2 class="text-slate-700 scale-150 font-bold m-3">{val.name}</h2>
        	  <h2 class="text-slate-700 scale-150 font-bold m-3">{val.hname}</h2>
        	</div>
          </div>
        )
    })}

</div>

{/* //////////////////////// */}
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
  );
}

export default Cards;