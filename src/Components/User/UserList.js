import React from 'react'
import './UserList.css'
import UserListItem from './UserListItem'


const UserList = (props) => {

    const onDeleteUser = (uid) => {
        props.onDeleteUser(uid);
    }

    return (
        <>
            <div className='userList'>
                {props.users.map((u) => (
                    <UserListItem user={u} key={u.user_id} onDeleteUser={onDeleteUser} />
                ))}

            </div>
        </>
    );
}

export default UserList