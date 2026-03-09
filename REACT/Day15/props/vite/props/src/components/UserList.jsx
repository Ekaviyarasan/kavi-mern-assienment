function UserList({ users }) {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.age} years
        </p>
      ))}
    </div>
  );
}

export default UserList;