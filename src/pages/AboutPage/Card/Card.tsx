import { FC } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
  children?: React.ReactNode;
  click: () => void;
}

export const Card: FC<CardProps> = ({
  width,
  height,
  variant,
  children,
  click,
}) => {
  return (
    <div
      onClick={click}
      style={{
        width,
        height,
        color: "black",
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
        margin: "20px",
      }}
    >
      Здесь будет карточка
      <br />
      {children}
    </div>
  );
};
