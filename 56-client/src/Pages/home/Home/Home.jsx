import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Section from "../Section/Section";
import { useState } from "react";
import Follow from "../Follow/Follow";


const Home = () => {
    const coffees = useLoaderData();
    const [cof,setCof]=useState(coffees)
    return (
        <div>
            <Banner/>
            <h1 className="text-center text-3xl my-10">{coffees.length}</h1>
           <div className="grid md:grid-cols-3 gap-5">
           {
            coffees.map(coffee=><Section cof={cof} setCof={setCof} key={coffee._id} coffee={coffee}/>)
           }
           </div>
           <Follow/>
        </div>
    );
};

export default Home;