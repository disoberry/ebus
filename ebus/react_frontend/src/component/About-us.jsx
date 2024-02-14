import background from "../images/image 4.png";
import styled from "styled-components";
import { darkGreen } from "./utils/utills";
import ticket_icon from "../images/icons-services/ticket.png";
import card_icon from "../images/icons-services/credit-card.png";
import wifi_icon from "../images/icons-services/wifi.png";
import wc_icon from "../images/icons-services/wc-sign.png";
import atm_icon from "../images/icons-services/atm.png";
import info_icon from "../images/icons-services/report.png";
import baby_icon from "../images/icons-services/baby-boy.png";
import disabled_icon from "../images/icons-services/disabled.png";
import health_icon from "../images/icons-services/health.png";
import cafe_icon from "../images/icons-services/restaurant.png";
import luggage_icon from "../images/icons-services/luggage.png";
import coffee_icon from "../images/icons-services/coffee-cup.png";
import alco_icon from "../images/icons-services/wine-bottle.png";
import seat_icon from "../images/icons-services/seat.png";
import paperbag_icon from "../images/icons-services/paper-bag.png";

export default function AboutUs() {
  const advantages = [
    {
      title: "Модерність та Комфорт: ",
      text: 'Рівненський автовокзал "Андріївський" оснащений сучасними зручностями, щоб забезпечити комфорт пасажирів. Ми працюємо над тим, щоб ваша подорож була приємною та безпечною.',
    },
    {
      title: "Широкий Вибір Маршрутів: ",
      text: "Ми пропонуємо різноманітні маршрути, що охоплюють ключові напрямки по всій країні.",
    },
    {
      title: "Професійний Персонал: ",
      text: "Наш колектив висококваліфікованих фахівців завжди готовий допомогти вам у вирішенні всіх питань, пов'язаних із подорожчю.",
    },
    {
      title: "Сучасні Технології та Інформаційна Підтримка: ",
      text: "Наш вебсайт надає повну інформацію про розклад руху автобусів, послуги, а також корисні поради для подорожуючих. Ми використовуємо сучасні технології для забезпечення найкращого обслуговування наших клієнтів.",
    },
    {
      title: "Екологічна Орієнтованість: ",
      text: "Ми прагнемо зменшувати екологічний вплив нашеї діяльності та підтримуємо ініціативи щодо збереження природи.",
    },
  ];

  const services = [
    { title: "Квиткова каса", icon: ticket_icon },
    { title: "Безготівковий розрахунок", icon: card_icon },
    { title: "Безкоштовний інтернет", icon: wifi_icon },
    { title: "Туалет", icon: wc_icon },
    { title: "Банкомат", icon: atm_icon },
    { title: "Довідкове бюро", icon: info_icon },
    { title: "Кімната батьків та дитини", icon: baby_icon },
    { title: "Допомога особам з інвалідністю", icon: disabled_icon },
    { title: "Медична допомога", icon: health_icon },
    { title: "Кафе", icon: cafe_icon },
    { title: "Камера схову", icon: luggage_icon },
    { title: "Кава автомат", icon: coffee_icon },
    { title: "Алкогольні напої", icon: alco_icon },
    { title: "Зал очікування", icon: seat_icon },
    { title: "Товари в дорогу", icon: paperbag_icon },
  ];

  return (
    <Block className="d-flex flex-column align-items-center">
      <img src={background} alt="background" className="w-100" />
      <h4>Про нас</h4>
      <Desc>Ласкаво просимо до Автовокзалу "Андріївський"!</Desc>
      <h5>Наші переваги:</h5>
      <AdvantsDiv>
        {advantages.map((item) => (
          <div key={advantages.indexOf(item)}>
            <span>{item.title}</span>
            {item.text}
          </div>
        ))}
      </AdvantsDiv>
      <ServicesDiv className="d-flex flex-column align-items-center">
        <h5 className="mb-3">Доступні послуги Автовокзалу “Андріївський”</h5>
        <div className="d-flex flex-wrap w-75 justify-content-between">
          {services.map((item) => (
            <div key={services.indexOf(item)}>
              <img src={item.icon} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </ServicesDiv>
    </Block>
  );
}

const ServicesDiv = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  background-color: #f5f5f5;
  width: 100%;
  margin-top: 1.5em;
  div div {
    display: flex;
    align-items: center;
    padding: 0.3em;
    flex: 1 1 33%;
    width: 33%;
    img {
      width: 30px;
      height: 30px;
    }
    p {
      margin: 0;
      padding-left: 10px;
      color: ${darkGreen};
    }
  }
`;

const AdvantsDiv = styled.div`
  width: 80%;
  div {
    padding: 0.6em 0;
    span {
      font-family: "DiaFontMedium";
      color: ${darkGreen};
      font-size: 1.05em;
    }
  }
`;

const Block = styled.div`
  /* padding: 2em 1em; */
  font-family: "DiaFontRegular";
  /* height: 50vh; */
  h4 {
    margin: 0.3em 0;
    font-size: 1.5em;
    padding-top: 0.5em;
    font-family: "DiaFontMedium";
  }
  h5 {
    font-size: 1.4em;
    margin: 0.3em 0;
  }
`;
const Desc = styled.p`
  font-family: "DiaFontLight";
  font-size: 1.35em;
  border-bottom: 3px solid ${darkGreen};
`;
