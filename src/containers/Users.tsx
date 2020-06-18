import React, { useState, useEffect } from 'react';
import { User } from '../models/user';
import { UserForm } from '../components/users/UserForm';
import { UserIndex } from '../components/users/UserIndex';
import { Dialog } from '../components/Dialog';

export const UsersContainer: React.FC = () => {
    const [formKey, setFormKey] = useState(0);
    const [isDialog, setDialog] = useState(false)
    const [currentUser, setCurrentUser] = useState<User>();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3044/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
    }, [])

    const resetForm = () => {
        setCurrentUser(undefined);
    }

    const rerenderForm = () => {
        setFormKey(new Date().getTime());
    }

    const handleDelete = (id: number) => {
        fetch(`http://localhost:3044/users/${id}`, { method: 'DELETE' })
            .then(response => {
                if(response.status === 200) {
                    setUsers(users.filter((u) => u.id !== id));
                }
            });
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
            {loading ? 'Loading' : 
                <>
                    <button onClick={toggleDialog}>Create</button>
                    <Dialog open={isDialog}>
                        <UserForm onSubmit={handleSubmit} initialUser={currentUser} key={formKey} onCancel={toggleDialog} />
                    </Dialog>
                    <UserIndex users={users} onDelete={handleDelete} onEdit={handleEdit} />
                </>
            }
        </div>
    );
}