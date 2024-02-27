import { TopBlock } from "./Bus-table";
import SearchBlock from "./element/search-block";
import styled from "styled-components";
import { darkGreen, lightGrey, mainGreen } from "./utils/utills";

export const searchingData = [
  {
    id: 1,
    departureTime: "5:00",
    from: "Рівне",
    to: "Дубно",
    arrivalTime: "6:15",
    price: "80",
    date: "2024-02-15",
  },
  {
    id: 2,
    departureTime: "15:00",
    from: "Рівне",
    to: "Дубно",
    arrivalTime: "16:15",
    price: "75",
    date: "2024-02-15",
  },
];

export default function SearchResult() {
  return (
    <div>
      <TopBlock className="w-100 d-flex align-items-center justify-content-center">
        <SearchBlock />
      </TopBlock>
      <div className="w-100 d-flex flex-column align-items-center py-1">
        <TitleBlock className="d-flex flex-column align-items-center">
          <h5>Розклад автобусів за маршрутом:</h5>
          <h6>“Рівне - Дубно”</h6>
        </TitleBlock>
        {searchingData.map((item) => (
          <BusSearchItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

const BusSearchItem = ({ data }) => {
  return (
    <BusSearchItemSt className="row align-items-center">
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
        <h3>{data.departureTime}</h3>
        <p>{data.date}</p>
        <h4>{data.from}</h4>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 align-items-xl-start align-items-lg-start align-items-md-start align-items-sm-start align-items-end">
        <h3>{data.arrivalTime}</h3>
        <p>{data.date}</p>
        <h4>{data.to}</h4>
      </div>
      <span className="col-xl-3 col-lg-3 col-6 col-sm-4 col-md-4 d-flex align-items-end justify-content-lg-start justify-content-md-end justify-content-sm-end">
        {data.price} <p>UAN</p>
      </span>
      <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-6 align-items-xl-start align-items-lg-start align-items-md-center align-items-sm-center align-items-end pt-md-3 pt-sm-3">
        <button className="">Замовити</button>
      </div>
    </BusSearchItemSt>
  );
};

const BusSearchItemSt = styled.div`
  width: 80%;
  background-color: #ededed;
  font-family: "DiaFontMedium";
  margin: 1em;
  padding: 1em;
  & > *:not(:nth-child(3)) {
    display: flex;
    flex-direction: column;
  }
  div {
    & > * {
      color: #474747;
      margin: 0.2em 0;
    }
    p {
      font-size: 1.1em;
      font-family: "DiaFontLight";
      padding-top: 0.3em;
    }
    h3 {
      font-size: 2em;
    }
    h4 {
      font-size: 1.2em;
      font-family: "DiaFontRegular";
    }
  }
  span {
    font-size: 2.5em;
    color: ${mainGreen};
    p {
      margin: 0.3em;
      font-size: 0.5em !important;
    }
  }

  button {
    /* height: 45px; */
    border-radius: 7px;
    background-color: ${mainGreen};
    border: 2px solid ${mainGreen};
    color: #fff;
    padding: 0.5em 2.5em;
    font-family: "DiaFontRegular";
    &:hover {
      background-color: ${darkGreen};
    }
  }
`;

const TitleBlock = styled.span`
margin: 1em 0;
  & > * {
    font-family: "DiaFontRegular";
    font-size: 1.4em;
    margin: 0.5em;
  }
  h6 {
    font-family: "DiaFontMedium";
    color: ${mainGreen};
font-size: 1.5em;

  }
`;
