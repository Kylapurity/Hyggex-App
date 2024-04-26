import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faArrowRight,
  faLightbulb,
  faSquare,
  faVolumeUp,
  faRedo,
  faPlus // Assuming you have this imported correctly
} from '@fortawesome/free-solid-svg-icons';
import Published from '../assets/Published.png'; // Assuming this is the image you want to include

const Hero = () => {
  return (
    <div className="bg-white" style={{ padding: '5%', marginLeft: '6%' }}>
      <div className="flex items-center space-x-2 justify-start">
        <FontAwesomeIcon icon={faHouse} className="h-6 w-6 text-gray-500" />
        <p className="text-gray-500 text-xl">Flashcard</p>
        <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5 text-gray-500" />
        <p className="text-gray-500 text-xl">Mathematics</p>
        <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5 text-gray-500" />
        <p className="text-blue-600 text-xl ">Relations and Functions</p>
      </div>
      <div className="text-blue-500 font-bold mt-2 pt-5 text-2xl">
        <p>Relations and Functions (Mathematics)</p>
      </div>
      <ul className="mt-4 flex space-x-6 justify-center m-5 pt-5">
        <li className="underline text-xl text-gray-500 font-medium">Study</li>
        <li className="text-xl text-gray-500 font-medium">Quiz</li>
        <li className="text-xl text-gray-500 font-medium">Test</li>
        <li className="text-xl text-gray-500 font-medium">Game</li>
        <li className="text-xl text-gray-500 font-medium">Others</li>
      </ul>
      <div className="mt-4 p-4 flex flex-col justify-start items-center" style={{
          width: '602px',
          height: '350.19px',
          background: 'linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)',
          marginLeft: '30%',
          borderRadius: '42.51px',
        }}>
        <div className="w-full flex justify-between pt-2">
          <FontAwesomeIcon icon={faVolumeUp} className="h-6 w-6 text-white" />
          <FontAwesomeIcon icon={faLightbulb} className="h-6 w-6 text-white" />
        </div>
        <p className="text-white text-center text-3xl" style={{ paddingTop: '20%' }}>9 + 6 + 7x - 2x - 3</p>
      </div>
      <div className="flex items-center justify-between mt-4 w-full max-w-xs ml-80" style={{ marginLeft: '40%' }}>
        <FontAwesomeIcon icon={faRedo} className="h-6 w-6 text-gray-500" />
        <div className="bg-blue-500 p-1 rounded-full">
            <FontAwesomeIcon icon={faArrowRight} className="h-6 w-6 text-white" />
        </div>
        <p className="text-blue-500">1</p>
        <div className="bg-blue-500 p-1 rounded-full">
            <FontAwesomeIcon icon={faArrowRight} className="h-6 w-6 text-white" />
        </div>
        <FontAwesomeIcon icon={faSquare} className="h-6 w-6 text-blue-500" />
      </div>
      <div className="flex justify-between items-center w-full mt-4">
        <img src={Published} alt="Published" style={{ height: '100px', marginLeft: '5%' }} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" style={{ marginRight: '5%' }}>
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Create Flashcard
        </button>
      </div>
    </div>
  );
}

export default Hero;





