import React from 'react';

function UserInfo(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Age: {props.user.age}</p>
      <p>Hobbies: {props.user.hobbies.join(', ')}</p>
    </div>
  );
}

function UserDetail() {
  const user = {
    name: 'Samiul',
    age: 30,
    hobbies: ['reading', 'gaming', 'hiking']
  };

  return <UserInfo user={user} />;
}

export default UserDetail;
