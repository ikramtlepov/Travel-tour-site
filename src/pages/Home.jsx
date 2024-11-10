import { BsArrowRight } from "react-icons/bs"; 
import React, { useState, useEffect } from 'react';
import Container from '../components/pageComp/Container';
import DestCard from "../components/pageComp/DestCard";
import { useSelector } from "react-redux";
import Loading from "../components/pageComp/Loading";
import Button from "../components/pageComp/Button";
import { Link } from "react-router-dom";
import bgGirl from "../img/about picture.png";
import { BiSearch } from "react-icons/bi";

const Home = () => {
  const { destinations, isDestLoad } = useSelector(state => state.destinationSlice);
  const [searchQuery, setSearchQuery] = useState('');
  const [Destinations, setDestinations] = useState([]);

  useEffect(() => {
    setDestinations(destinations?.slice(0, 3));
  }, [destinations]);

  const filteredDestinations = destinations?.filter(dest =>
    dest.name.charAt(0).toLowerCase() === searchQuery.charAt(0).toLowerCase() ||
    dest.country.charAt(0).toLowerCase() === searchQuery.charAt(0).toLowerCase()
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div>
      <div className='min-w-[calc(100vh-700px)] bg-backgroundImage min-h-[calc(100vh-100px)] bg-no-repeat bg-center bg-cover text-white'>
        <Container>
          <div className="flex flex-col justify-center items-start py-10">
            <h1 className="sm:text-[80px] font-bold text-[50px]">
              The whole world <br /> awaits.
            </h1>
            <form className="bg-white flex text-black rounded-full w-full relative mt-9 items-center justify-between  shadow-md" onSubmit={handleSearchSubmit}>
              <BiSearch className="text-gray-400 ml-4 text-2xl" />
              <input
                type="text"
                placeholder="Search destinations"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-8 py-4 w-full outline-none rounded-full border-gray-300 placeholder:text-gray-400 text-[18px] placeholder:opacity-75"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full ml-2 mr-2 cursor-pointer hover:bg-blue-600 transition"
              >
                Search
              </button>
            </form>
          </div>
        </Container>
      </div>
      <Container>
        {isDestLoad ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="mt-3 w-full ">
            <h1 className="text-center text-[34px] font-semibold py-4 text-blue-700">Top Vacation Destinations</h1>
            <div className='grid w-full sm:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-[10px] justify-center'>
              {(searchQuery ? filteredDestinations : Destinations)?.length > 0 ? (
                (searchQuery ? filteredDestinations : Destinations)?.map(item => (
                  <DestCard item={item} key={item.id} />
                ))
              ) : (
                <div className="text-center text-gray-500">No destinations found.</div>
              )}
            </div>
          </div>
        )}
        <div className="text-center justify-center items-center flex mt-3">
          <Link to="/destination">
            <Button 
              children="More" 
              icon={BsArrowRight} 
              addStyle="border-[1px] border-blue-600 rounded-full py-2 px-6 text-blue-500"
            />
          </Link>
        </div>

        <div className="mt-7 flex-col sm:flex-row text-center sm:text-start gap-2 sm:flex justify-center items-center ">
          <div className="flex-1 flex justify-center items-center">
            <img src={bgGirl} alt="" />
          </div>

          <div className="flex-1 font-bold text-center flex flex-col sm:text-left">
            <div className="flex flex-col">
              <h4 className="text-lg text-gray-400">WELCOME TO OUR SITE</h4>
              <h2 className="text-2xl sm:text-3xl">We are the best company for your visit</h2>
              <p className="text-gray-500 py-3">
                After decades of experience, and a lifetime in Lucca, we offer you the most complete tourism service in the city.
                In addition to bikes and rickshaws for as much fun as you want, you can choose tour guides and drivers for any need.
                We provide packages to give you the most at the lowest price. Book with us, and we’ll always be here for you!
              </p>
            </div>
            <div className="flex justify-between items-center py-3 flex-grow flex-wrap w-full">
              {[
                { count: "20+", label: "Years Experience" },
                { count: "100+", label: "Happy Customers" },
                { count: "15+", label: "Choice of Services" },
                { count: "10+", label: "Professional Guides" },
              ].map((item, index) => (
                <div key={index} className="w-[100px] py-2 text-center flex-grow">
                  <span className="text-orange-500 text-[20px]">{item.count}</span>
                  <p className="text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
