import React, { useState, useEffect, useRef } from "react";
import "./carousal.css";

export default function Carousal(props) {
  const [current] = useState(0);
  const [active, setActive] = useState(1);

  let inputEl = useRef(null);
  let offset = useRef(0);
  let carouselWidth;
  let max;
  let by3;

  useEffect(() => {
    carouselWidth = inputEl.current.offsetWidth;
    by3 = Math.floor(carouselWidth / 3) - 3;
    max = -parseInt((by3 * (props.array.length + 1 - 3)));
  }, [current, active, props.array]);

  useEffect(() => {
    offset.current = 0;
    inputEl.current.style.transform = `translateX(${offset.current}px)`;
    max = -parseInt((by3 * (props.array.length + 1 - 3)));
    setActive(1);
  }, [props.array])

  const moveLeft = () => {
    if (offset.current !== 0) {
      offset.current += by3;
      inputEl.current.style.transform = `translateX(${offset.current}px)`;
      setActive(active - 1);
    }
  }
  const moveRight = () => {
    if (offset.current !== max) {
      offset.current -= by3;
      inputEl.current.style.transform = `translateX(${offset.current}px)`;
      setActive(active + 1);
    }
  }

  return (
    <>
      <ul ref={inputEl} className="carousel">
        {props.array.length > 0
          ? props.array.map((item, index) => {
            return (
              <li className={index === active ? "active card" : 'card'}  data-target={"card"} key={index}>
                <span className={'prod-image'}>
                </span>
                <div className={'prod-details'}>
                  <p className={'prod-label'}>
                    {item.pName}
                  </p>
                  <p className={'prod-cost'}>
                    {item.cost}
                  </p>
                  <p className={'prod-cat'}>
                    {item.cat}
                  </p>
                </div>
              </li>
            );
          })
          : null}
      </ul>
      <div className="button-wrapper">
        <button
          onClick={() => moveLeft()}
          className={'left-button'}
        >
          {'<'}
        </button>
        <button
          onClick={() => moveRight()}
          className={'right-button'}
        >
          {'>'}
        </button>
      </div>
    </>
  );
}
