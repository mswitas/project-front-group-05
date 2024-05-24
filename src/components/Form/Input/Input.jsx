import {
  NumberMobil,
  InputMobile,
  Span,
  Number,
  InputNumber,
  Image,
} from "./Input.styled";
import { useMatchMedia } from "../../../hooks/MediaQuery";
import icons from "../../../assets/icons.svg";

export default function Input() {
  const { isMobile } = useMatchMedia();
  return (
    <>
      {isMobile ? (
        // Mobile version
        <NumberMobil>
          <InputMobile type="number" placeholder="00.00 UAH" name="sum" />
          <Span>
            <Image>
              <use href={`${icons}#calculator`}></use>
            </Image>
          </Span>
        </NumberMobil>
      ) : (
        // Tablet and desktop versions
        <Number>
          <InputNumber type="number" placeholder="0,00 UAH" name="sum" />
          <Image>
            <use href={`${icons}#calculator`}></use>
          </Image>
        </Number>
      )}
    </>
  );
}
