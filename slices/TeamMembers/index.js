import React from "react";
import { RichText } from "prismic-reactjs";

const MySlice = ({ slice }) => {
  console.log(slice.primary);
  return (
    <section className="bg-gray-700 text-gray-1 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-50 title-font">
            {slice.primary.title[0]?.text}
          </h1>
          <p className="max-w-xl mx-auto text-base leading-relaxed text-gray-200">
            {slice.primary.description[0]?.text}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {slice?.items?.map((item, i) => (
            <div className="p-4 lg:w-1/4 md:w-1/2" key={i}>
              <div className="flex flex-col items-center h-full text-center">
                <img
                  src={item.photo.url}
                  alt={item.name}
                  className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                />

                <div className="w-full">
                  <h2 className="text-lg font-medium text-gray-50 title-font">
                    {item.name}
                  </h2>
                  <h3 className="mb-3 text-gray-300">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySlice;
