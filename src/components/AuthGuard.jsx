import { useAdmin } from "../Hooks/UseAdmin";
import { NotPermit } from "../Pages/NotPermit/NotPermit";
export function AuthGuard({ children }) {
    const admin = useAdmin();
    if (admin.loading) {
        return null;
    }
    if (!admin.isAdmin) {
        return <NotPermit />;
    }
    return <>
        {children}
    </>
}