import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // 2. Create a Dummy User if storage is empty
        const dummyUser = { role: "admin", name: "Dummy Admin" };

        const currentUser = storedUser || dummyUser;

        if (currentUser && currentUser.role === "admin") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
            navigate("/", { replace: true });
        }

        setLoading(false);
    }, [navigate]);

    return { isAdmin, loading };
};