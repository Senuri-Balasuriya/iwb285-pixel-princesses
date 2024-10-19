import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from the PHP API when the component mounts
  useEffect(() => {
    fetch('http://localhost/api.php') // Make sure this URL is correct for your server setup
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="w-full max-w-md">
        {users.length > 0 ? (
          users.map(user => (
            <li
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"
            >
              <span className="text-lg">{user.name}</span>
              <span className="text-gray-600">{user.email}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-600">Loading users...</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
