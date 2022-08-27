import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { IUser } from "../models";

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUsers() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IUser[]>(
        "https://fakestoreapi.com/users?limit=5"
      );
      setUsers(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, error, loading };
};
