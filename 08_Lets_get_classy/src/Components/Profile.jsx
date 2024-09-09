import { useEffect } from "react";

const Profile = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("I am running");
        }, 1000);

        return () => {
            console.log("Cleanup of Profile")
            clearInterval(timer); // Use the correct variable name 'timer' here
        };
    }, []);

    return <h1>Profile</h1>;
};

export default Profile;