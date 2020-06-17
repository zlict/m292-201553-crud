import React, { useState } from 'react';
import { User, defaultUser } from '../../models/user';

type Props = {
    onSubmit: (user: User) => void;
    initialUser?: User;
}

export const UserForm: React.FC<Props> = (props) => {
    const [currentUser, setCurrentUser] = useState<User>(
        props.initialUser ?? {...defaultUser, id: new Date().getTime()}
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmit(currentUser);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.type === 'checkbox') {
            setCurrentUser({...currentUser, [e.target.name]: e.target.checked});
        } else {
            setCurrentUser({...currentUser, [e.target.name]: e.target.value});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="forname">Forname</label>
            <input type="text" id="forename" name="forename" onChange={handleChange} value={currentUser.forename} />
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" name="surname" onChange={handleChange} value={currentUser.surname} />
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" name="birthday" onChange={handleChange} value={currentUser.birthday.split('T')[0]} />
            <label htmlFor="active">Active</label>
            <input type="checkbox" id="active" name="active" onChange={handleChange} checked={currentUser.active} />
            <button type="submit">Submit</button>
        </form>
    );
}