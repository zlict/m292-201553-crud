import React, { useState } from 'react';
import { User } from '../models/user';
import { UserForm } from '../components/users/UserForm';
import { UserIndex } from '../components/users/UserIndex';
import { Dialog } from '../components/Dialog';

export const UsersContainer: React.FC = () => {
    const [formKey, setFormKey] = useState(0);
    const [isDialog, setDialog] = useState(false)
    const [currentUser, setCurrentUser] = useState<User>();
    const [users, setUsers] = useState<User[]>([
        { 
            id: 1,
            forename: 'Chuck', 
            surname: 'Norris', 
            birthday: new Date('1/1/1940').toISOString(), 
            active: false
        }, {
            id: 2,
            forename: 'Scarlett', 
            surname: 'Johanson', 
            birthday: new Date('1/1/1980').toISOString(), 
            active: true
        }, {
            id: 3,
            forename: 'Viola',
            surname: 'Amherd',
            birthday: new Date('1/1/1960').toISOString(), 
            active: true
        }
    ]);

    const resetForm = () => {
        setCurrentUser(undefined);
    }

    const rerenderForm = () => {
        setFormKey(new Date().getTime());
    }

    const handleDelete = (id: number) => {
        setUsers(users.filter((u) => u.id !== id));
    }

    const handleSubmit = (user: User) => {
        if(currentUser) {
            // update
            setUsers(users.map((u) => u.id === user.id ? user : u));
        } else {
            // create
            setUsers([...users, user]);
        }
        resetForm();
        rerenderForm();
        toggleDialog();
    }

    const handleEdit = (id: number) => {
        setCurrentUser(users.find((u) => u.id === id));
        rerenderForm();
        toggleDialog();
    }

    const toggleDialog = () => {
        setDialog(!isDialog);
    }

    return (
        <div>
            <button onClick={toggleDialog}>Create</button>
            <Dialog open={isDialog}>
                <UserForm onSubmit={handleSubmit} initialUser={currentUser} key={formKey} onCancel={toggleDialog} />
            </Dialog>
            <UserIndex users={users} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
}