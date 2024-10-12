import { useFetchUsers, useUsersSelector } from './state/hooks';
import { useEffect } from 'react';

const UsersBox = (props) => {
    const users = useUsersSelector();
    // console.log(users);

    const callFetchUsers = useFetchUsers();

    useEffect(() => {
        callFetchUsers();
    }, []);

    return (
        <>
            <div>
                <h4>Authors</h4>
                <select name="" id="">
                    <option value={-1}>Select Author</option>
                    {users.map((user) => {
                        return (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
};

export default UsersBox;
