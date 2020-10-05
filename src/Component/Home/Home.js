import React, { useState } from 'react';

import fakedata from '../../FakeData/fakedata'
import Events from '../Events/Events';

const Home = () => {
const [evnts, setEvnts] = useState(fakedata);
console.log(fakedata);

    return (
       

         <div className="row">
         {
                evnts.map(evnt => <Events key={evnt.key} event={evnt}></Events>)
            }
         </div>


    );
};

export default Home;