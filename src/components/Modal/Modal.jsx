import React from "react";

const Modal = ({ details }) => {
  
  const { description, image_link, features, integrations, accuracy} =
    details;

  return (
    <div>
      <div className="modal" id="my_modal_8">
        <div className="modal-box w-10/12 max-w-5xl relative">
          <div className="md:flex gap-5">
            <div className="details-right rounded-2xl w-full font-primaryFont p-7">
              <h2 className="text-2xl text-black font-semibold">
                {description}
              </h2>
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title text-black text-2xl font-semibold mt-8">
                    Features
                  </h2>
                  {Object.values(features || {}).map((value, index) => (
                    <li key={index}>
                      {value.feature_name ? value.feature_name : "Not Found"}
                    </li>
                  ))}
                </div>
                <div>
                  <h2 className="card-title text-black text-2xl font-semibold mt-8">
                    Integrations
                  </h2>
                  {integrations?.map((integration, index) => (
                    <p key={index}>
                      {index + 1}. {integration}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="border w-full rounded-2xl md:mt-0 mt-4">
              <div className="card relative">
                <figure className="p-6">
                  <img
                    src={image_link && image_link[0]}
                    alt="details"
                    className="rounded-2xl"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="text-white font-primaryFont font-semibold bg-red pt-1 pb-2 px-4 rounded-lg md:absolute top-10 right-10 md:mt-0 mt-4">
            <p>
              <span>{accuracy?.score}</span>% accuracy
            </p>
          </div>
          <div className="modal-action">
            <a
              href="#"
              className="px-5 py-3 rounded-full text-white bg-red md:absolute top-0 right-0"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
