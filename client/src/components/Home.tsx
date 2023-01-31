import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchUsers, fetchCurrentUser } from '../store/users-actions';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const allUsers = useAppSelector(state => state.state.users);
    const currentUser = useAppSelector(state => state.state.current_user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const hasUsers = (): boolean => {
        if (allUsers.length == 0) {
            return false;
        };
        return true;
    };

    const setCurrentUser = (user_id: number) => ():any => {
        dispatch(fetchCurrentUser(user_id));
        navigate("/"+user_id);
    };

    return (
        <>
            <div>
                <div className="container">
                    <h4>USERS LIST</h4>
                    <ul className="list-group">
                        { 
                            hasUsers() && allUsers.map((user) => (
                                <li key={user.id} className="list-group-item">
                                    <div className="row">
                                        <div className="col-9">{ user.firstName }</div>
                                        <div className="col-3">
                                            <button className="btn btn-dark" onClick={ setCurrentUser(user.id) }>User details</button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;