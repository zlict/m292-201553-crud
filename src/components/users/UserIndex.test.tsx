import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import { UserIndex } from './UserIndex';

describe('UserIndex', () => {
    const renderUserIndex = (onDeleteMock: (id: number) => void, onEditMock: (id: number) => void) => {
        const users = [
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
        ];
        return render(<UserIndex users={users} onDelete={onDeleteMock} onEdit={onEditMock} />);
    }

    it('should render a table', () => {
        const onDelete = jest.fn();
        const onEdit = jest.fn();
        const result = renderUserIndex(onDelete, onEdit);
        expect(result.container.querySelector('table').tagName).toBe('TABLE');
    });

    it('should call onDelete, when delete button is clicked', () => {
        const onDelete = jest.fn();
        const onEdit = jest.fn();
        const result = renderUserIndex(onDelete, onEdit);
        const deleteButton = result.queryAllByText('Delete')[1];
        fireEvent.click(deleteButton);
        expect(onDelete).toBeCalledTimes(1);
        expect(onDelete).toBeCalledWith(2);
    })
})