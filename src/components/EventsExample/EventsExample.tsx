import React, { FC, useRef, useState } from "react";

export const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  return (
    <>
      <h3>События</h3>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        style={{ border: "1px solid black" }}
        placeholder="Управляемый"
      />
      <input
        ref={inputRef}
        type="text"
        style={{ border: "1px solid black" }}
        placeholder="Неуправляемый"
      />
      <button style={{ border: "1px solid gray" }} onClick={clickHandler}>
        Вывести в логах
      </button>
    </>
  );
};
