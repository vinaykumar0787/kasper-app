import React, { useState, useEffect } from 'react';
import * as API from '../backend_interfaces/be_api';
import Button from "react-bootstrap/Button";
import AddEditUser from './add_user';
import UserList from './user_list';

async function GetUsers(setUsers) {
    try {
            const users = await API.getUsers();
            setUsers(users);
        } catch(ex) {
            console.warn(`Error Getting Users: ${ex}`);
        }
}

async function SaveUser(name, id, users, setUsers) {
    try {
            if(id === 0) {
                const newUser = await API.saveUser(name);
                users.push(newUser);
                setUsers(users);
            } else {
                const user = await API.editUser(id, name);
                const index = users.findIndex(i => i.id === id);
                users[index] = user;
                setUsers(users);
            }
        } catch(ex) {
            console.warn(`Error Saving User: ${ex}`);
        }
}

async function DeleteUser(id, users, setUsers) {
    try {
            await API.deleteUser(id);
            const index = users.findIndex(i => i.id === id);
            users.splice(index, 1);
            setUsers(users);
        } catch(ex) {
            console.warn(`Error Deleting User: ${ex}`);
        }
}

export default function HomePage() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(undefined);

  useEffect(() => {
    GetUsers(setUsers);
  }, []);

  const handleClose = () => setShowAddUser(false);
  const handleShow = () => setShowAddUser(true);

  const handleUserSave= (newName, id) => {
    SaveUser(newName, id, [...users], setUsers);
    setShowAddUser(false);
  }

  const handleUpdateUsers = (newUsersList) => {
      setUsers(newUsersList);
  }

  const handleEditClick = (index) => {
      setEditUser(undefined);
      const newEditUser = users[index];
      setEditUser(newEditUser);
      handleShow();
  }

  const handleDeleteClick = (id) => {
    DeleteUser(id, [...users], setUsers);
  }

  return (
    <>
        <br/>
        <Button variant="primary" onClick={handleShow}>
            Add New User
        </Button>
        <br/>
        <br/>
        <UserList usersList={users} onUpdateUsers={handleUpdateUsers} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick}></UserList>

        <AddEditUser showAddUser={showAddUser} onHandleSave={handleUserSave} onHandleClose={handleClose} user={editUser}></AddEditUser>
    </>
  );
}