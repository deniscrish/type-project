import axios from "axios";
import { FC, useState, useEffect } from "react";
import { EventsExample } from "../../components/EventsExample/EventsExample";
import { IUser } from "../../types/types";
import "./AboutPage.scss";
import { Card, CardVariant } from "./Card/Card";
import { UserList } from "./UserList/UserList";

export const AboutPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="about-page">
      <EventsExample />
      <div className="about-page_block1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias
      </div>
      <div className="about-page_block2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        iure.
        <p className="about-page_block__small-text">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <a href="https://www.google.com/" className="about-page_link">
        Google
      </a>
      <div className="about-page_block3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias
      </div>
      <div className="about-page_block4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias
      </div>
      <Card
        click={() => console.log(`Кликнули :D`)}
        variant={CardVariant.primary}
        width="300px"
        height="100px"
      >
        <button>Кнопка</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};
