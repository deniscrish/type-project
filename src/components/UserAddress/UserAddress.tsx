import { useState } from "react";

interface IUserAddress {
  address: {
    geolocation: { lat: string; long: string };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
}

export const UserAddress = ({ address }: IUserAddress) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="py-2 px-4 border bg-gray-400"
      >
        {open ? "Hide" : "Show address"}
      </button>
      {open && (
        <>
          <div>
            <span className="font-bold">City: </span>
            {address.city}
          </div>
          <div>
            <span className="font-bold">Street: </span>
            {address.street}
          </div>
          <div>
            <span className="font-bold">Number: </span>
            {address.number}
          </div>
          <div>
            <span className="font-bold">Zipcode: </span>
            {address.zipcode}
          </div>
        </>
      )}
    </>
  );
};
