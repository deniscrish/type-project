import { FC } from "react";
import { IUser } from "../../../types/types";
import { UserItem } from "../UserItem/UserItem";

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <>
      <h5>Список пользователей</h5>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </>
  );
};
