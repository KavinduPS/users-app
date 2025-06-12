import { useEffect, useState } from "react";
import type { User } from "../types";
import axios from "axios";
import UsersTable from "../components/UsersTable";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    };
    getUsers();
  }, [users]);

  const handleEditPress = (user: User) => {
    navigate(`/edit-user`, { state: { user } });
  };

  const handleDelete = async (id: String) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
  };

  return users ? (
    <UsersTable
      users={users}
      onEditPress={handleEditPress}
      onDeletePress={handleDelete}
    />
  ) : (
    <>
      <p>No Users</p>
    </>
  );
};

export default Home;
