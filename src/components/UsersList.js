import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeletons from "./Skeleton";

function UsersList() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleUserAdd = () => {
        dispatch(addUser());
    };

    if (isLoading) {
        return <Skeletons times={6} className="h-10 w-full" />;
    }

    if (error) {
        return <div>Error Fetching data...</div>
    }

    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">User</h1>
                <Button onClick={handleUserAdd}>
                    + Add User
                </Button>
            </div>
            {renderedUsers}
        </div>
    );
}

export default UsersList;