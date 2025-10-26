function userlist() {
  const users = ["Alice", "Bob", "Char1"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
      ;
    </ul>
  );
}

export default userlist;
