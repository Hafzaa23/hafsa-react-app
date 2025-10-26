function Dashboard({ IsloggeIN }) {
  return (
    <div>
      {IsloggeIN ? <p>you are logged in!</p> : <p>please logg in. </p>}
      {IsloggeIN ? <p>yes true</p> : <p>No false</p>}
    </div>
  );
}

export default Dashboard;
