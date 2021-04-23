import React from "react";
import Credit from "../../components/Credit";

const MySlice = ({ slice }) => {
  return (
    <section className="overflow-hidden text-gray-700 body-font">
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <h2 className="max-w-2xl mx-auto mb-6 text-5xl font-bold leading-normal text-center">
          {slice.primary.title}
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-xl leading-normal text-center">
          {slice.primary.description}
        </p>
        <div className="flex flex-wrap -m-1 md:-m-2">
          {slice?.items?.map((item, i) => (
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt={item.image.alt}
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={item.image.url}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Credit
        author="Liam Egan"
        pending
        twitter="https://twitter.com/liamegan"
      />
    </section>
  );
};

export default MySlice;
