import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const Card = () => {
  const [cards, setCards] = useState([]);
  const [details, setDetails] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("cards.json")
      // fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setCards(data?.data?.tools));
  }, []);

  const handleDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.data));
  };

  const handleSort = () => {
    const sortedData = cards.sort((a, b) => {
      return new Date(b.published_in) - new Date(a.published_in);
    });
    setCards([...cards, sortedData]);
  };

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="mt-5">
        <span onClick={handleSort}>
          <Button>Sort By Date</Button>
        </span>
      </div>
      <section className="md:w-10/12 mx-auto mt-12 md:px-0 px-4">
        <div className="grid md:grid-cols-3 gap-4">
          {cards?.slice(0, showAll ? 12 : 6).map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleDetails={handleDetails}
            ></SingleCard>
          ))}
        </div>
        <Modal details={details} />
      </section>
      <div className="mt-12">
        {!showAll && (
          <span onClick={handleSeeMore}>
            <Button>See More</Button>
          </span>
        )}
      </div>
    </>
  );
};

export default Card;
