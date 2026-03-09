import UserList from "./UserList";

function UsersContainer() {
  const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Sara", age: 30 },
    { id: 3, name: "Mike", age: 22 }
  ];

  return <UserList users={users} />;
}

export default UsersContainer;