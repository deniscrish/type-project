import { useUsers } from "../../hooks/users";
import { Loader } from "../../components/Loader/Loader";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { UserAddress } from "../../components/UserAddress/UserAddress";

import "./UserPage.scss";
import { FC } from "react";
// import "./UserPage.css";

export const UserPage: FC = () => {
  const { loading, error, users } = useUsers();

  return (
    <div className="user-page">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {!loading && !error && (
        <h1 className="user-page_header">
          Список пользователей <span>(данные с сервера)</span>
        </h1>
      )}
      {users.map((user) => (
        <div
          key={user.id}
          className="border py-2 px-4 w-1/3 rounded flex flex-col items-center mb-3"
        >
          <div className="font-bold">
            {user.name.firstname} {user.name.lastname}
          </div>
          <div>Phone: {user.phone}</div>
          <div>Nickname: {user.username}</div>
          <img
            src="https://picsum.photos/200"
            className="w-1/2"
            alt={user.username}
          />
          <UserAddress address={user.address} />
        </div>
      ))}
    </div>
  );
};
