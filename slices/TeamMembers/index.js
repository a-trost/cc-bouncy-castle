import React, { useState } from "react";
import Balloon from "./Balloon";
import Credit from "../../components/Credit";
import Buttons from "./Buttons";
import faker from "faker";

const MySlice = ({ slice }) => {
  const [team, setTeam] = useState(slice.items);

  const handleHire = () => {
    const name = faker.name.findName();
    const title = faker.name.jobTitle();
    /*

     To stop the balloons from changing on rerender, you could move the 
     creation of their random values here to lock them in.
    
     */
    setTeam([...team, { name, title }]);
  };
  const handleFire = () => {
    if (team.length === 0) return;
    setTeam(team.slice(0, team.length - 1));
  };

  return (
    <section className="relative bg-white text-gray-1 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-10 text-center">
          <h1 className="mb-4 text-4xl font-medium text-green-700 font-display title-font">
            {slice.primary.title[0]?.text}
          </h1>
          <p className="max-w-xl mx-auto text-base leading-relaxed text-gray-800">
            {slice.primary.description[0]?.text}
          </p>
          <Buttons onHire={handleHire} onFire={handleFire} />
        </div>
        <div className="flex flex-wrap -m-4">
          {team.map((item, i) => (
            <div className="p-4 lg:w-1/4 md:w-1/2" key={i}>
              <div className="flex flex-col items-center h-full text-center">
                <div className="w-full">
                  <Balloon index={i} />
                  <h2 className="text-xl font-medium text-blue-700 title-font">
                    {item.name}
                  </h2>
                  <h3 className="mb-3 text-gray-500">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Credit
        author="George Francis"
        twitter="https://twitter.com/georgedoescode"
      />
    </section>
  );
};

export default MySlice;
