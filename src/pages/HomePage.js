import React, { useCallback, useEffect, useState } from "react";
import { data } from "../data/Data";
import Card from "../components/Card";
import FilterItems from "../components/FilterItems";
import { GiSandsOfTime } from "react-icons/gi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [dataList, setDataList] = useState(data);
  const [noOfElement, setNoOfElement] = useState(6);
  const [selectedItem, setSelectedItem] = useState("New York");
  const [collection, setCollection] = useState([]);
  const slice = dataList.slice(0, noOfElement);

  const navigate = useNavigate();

  const handleClick = (property) => {
    const url = `/property/${property.id}`;
    navigate(url, { state: { id: property } });
  };

  const filterItem = useCallback(() => {
    const updatedItems = data.filter((curElem) => {
      return curElem.city === selectedItem;
    });
    setDataList(updatedItems);
  }, [selectedItem]);

  const loadMore = () => {
    setNoOfElement(noOfElement + 3);
  };

  useEffect(() => {
    setCollection([...new Set(data.map((item) => item.city))]);
  }, []);

  useEffect(() => {
    filterItem();
  }, [selectedItem, filterItem]);

  return (
    <Wrapper className="home">
      <div className="py-8 w-full flex justify-center flex-col items-center">
        <h1 className=" font-bold text-4xl py-4">Featured Listed Property</h1>
        <p className="max-w-sm">
          Real estate can be bought, sold, leased, or rented, and can be a
          valuable investment opportunity.
        </p>
      </div>
      <div className="lg:px-20 md:px-5 pb-20">
        <div>
          <FilterItems
            collection={collection}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2">
            {slice.map((item) => {
              return (
                <div className="relative h-full p-8">
                  <div
                    className="relative wrapper bg-white rounded cursor-pointer"
                    onClick={()=>handleClick(item)}
                  >
                    <Card property={item} />
                    {item.popular ? (
                      <div className="banner bg-blue-600 rounded">
                        <span>Popular</span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {noOfElement !== dataList.length ? (
            <div className="w-full flex justify-center mt-3">
              <button
                className="flex justify-center items-center bg-blue-700 py-3 px-5 rounded-full text-white"
                onClick={() => loadMore()}
              >
                <span>
                  <GiSandsOfTime size={20} />
                </span>
                Show More
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.section`
  .cards{
    .card-image{
        max-height: 215px;
    }
  }
  .wrapper {
    min-width: 250px;
    transition: all 0.5s linear;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .banner {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    color: white;
    top: 210px;
    left: -2%;
    border-bottom-left-radius: 0%;
    &:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: rgb(0, 9, 235);
      top: 100%;
      left: 0%;
      border-bottom-left-radius: 50%;
    }
  }
`;
