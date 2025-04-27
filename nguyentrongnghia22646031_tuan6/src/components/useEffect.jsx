import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API giả lập (jsonplaceholder)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Lỗi fetch dữ liệu:', error);
        setLoading(false);
      });
  }, []); // chạy 1 lần khi component mount

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  return (
    <div className="row">
      {users.map(user => (
        <div className="col-md-4 mb-3" key={user.id}>
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.email}</p>
              <p className="card-text"><small className="text-muted">{user.phone}</small></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
