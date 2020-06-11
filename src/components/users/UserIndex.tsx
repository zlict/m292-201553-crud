import React from 'react';
import { User } from '../../models/user';

type Props = {
    users: User[];
    onDelete: (id: number) => void;
} 

export const UserIndex: React.FC<Props> = (props) => {
    const handleDelete = (id: number) => {
        props.onDelete(id);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Forename</th>
                    <th>Surname</th>
                    <th>Birthday</th>
                    <th>Active</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((u) => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.forename}</td>
                        <td>{u.surname}</td>
                        <td>{u.birthday}</td>
                        <td>{u.active}</td>
                        <td>
                            <button onClick={() => handleDelete(u.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}