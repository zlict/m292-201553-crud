import React, { useState } from 'react';
import { User } from '../models/user';
import { UserForm } from '../components/users/UserForm';
import { UserIndex } from '../components/users/UserIndex';

export const UsersContainer: React.FC = () => {
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

    const onDelete = (id: number) => {
        setUsers(users.filter((u) => u.id !== id));
    }

    return (
        <div>
            <UserForm />
            <UserIndex users={users} onDelete={onDelete} />
        </div>
    );
}