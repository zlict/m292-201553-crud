import React, { useRef } from 'react';
import { User } from '../../models/user';

type Props = {
    onSubmit: (user: User) => void;
}

export const UserForm: React.FC = (props) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="forname">Forname</label>
            <input type="text" id="forename" />
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" />
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" />
            <label htmlFor="active">Active</label>
            <input type="checkbox" id="active" />
            <button type="submit">Submit</button>
        </form>
    );
}