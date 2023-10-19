import React from 'react';
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";

const SingleCard = ({ card, handleDetails }) => {
  const { id, image, name, published_in, features } = card;

  return (
    <div className="card border-cart rounded-2xl">
      <figure className="p-6">
        <img src={image} alt="cards" className="card-image rounded-2xl" />
      </figure>
      <div className="card-body font-primaryFont">
        <h2 className="card-title text-black text-2xl font-semibold -mt-10">
          Features
        </h2>
        <div className="text-grey mb-6">
          {features.map((feature, index) => (
            <p key={index}>
              {index + 1}. {feature}
            </p>
          ))}
        </div>
        <hr className="under-line" />
        <div className="card-footer">
          <h2 className="card-title text-black text-2xl font-semibold pt-6">
            {name}
          </h2>
          <div className="flex justify-between items-center mt-4">
            <div className="flex justify-center items-center gap-2">
              <span>
                <FaRegCalendarAlt className="w-6 h-6" />{" "}
              </span>
              <p className="text-grey font-medium">{published_in}</p>
            </div>
            <div className="px-5 py-4 rounded-full bg-whiteRed">
              <a href="#my_modal_8">
                <FaArrowRight
                  onClick={() => handleDetails(id)}
                  className="w-6 h-6 text-red"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;