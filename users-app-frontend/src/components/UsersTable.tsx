import type { User } from "../types";

interface UsersTableProps {
  users: User[];
  onEditPress: (user: User) => void;
  onDeletePress: (id: String) => Promise<void>;
}

const UsersTable = ({ users, onEditPress, onDeletePress }: UsersTableProps) => {
  return (
    <div className="flex justify-center">
      <div className="py-4 w-full flex justify-center">
        <table className="table-auto w-5/6 border-2 border-rounded mt-10">
          <thead className="border-b-1 w-full">
            <tr className="h-12">
              <th className="w-1/7">#</th>
              <th className="w-2/7">Name</th>
              <th className="w-2/7">Email</th>
              <th className="w-2/7">Actions</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {users.map((user) => (
              <tr
                key={Number(user.id)}
                className="border-b-1 border-gray-300 h-12"
              >
                <td className="text-center">{user.id}</td>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  <button
                    onClick={() => onEditPress(user)}
                    className="bg-yellow-400 text-white py-1 px-4 rounded-md mx-2 hover:cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeletePress(user.id)}
                    className="bg-red-600 text-white py-1 px-4 rounded-md mx-2 hover:cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
