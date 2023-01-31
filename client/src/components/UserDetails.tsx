import { useAppSelector } from "../hooks/redux-hooks";

const UserDetails = () => {
    const currentUser = useAppSelector(state => state.state.current_user);

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Hi {currentUser.firstName}!</h5><br />
                        <h6 className="card-subtitle mb-2">User details</h6><br />
                        <h6 className="card-subtitle mb-2 text-muted">Full name: {currentUser.firstName + " " + currentUser.lastName}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">ID: {currentUser.id}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">AGE: {currentUser.age}</h6>
                    </div>
                </div>
            </div>
        </>
    )
};

export default UserDetails;