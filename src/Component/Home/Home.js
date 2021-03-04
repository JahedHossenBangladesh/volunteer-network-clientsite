import React, { useState } from 'react';
import fakedata from '../../FakeData/fakedata';
import Events from '../Events/Events';
import './Home.css';

const Home = () => {
const [evnts, setEvnts] = useState(fakedata);


    return (
       <>
 <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
      </div>
    </div>
         <div className="row">
         {
                evnts.map(evnt => <Events key={evnt.key} event={evnt}></Events>)
            }
         </div>
</>

    );
};

export default Home;