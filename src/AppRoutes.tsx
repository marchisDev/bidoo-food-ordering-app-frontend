import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallBackPage from "./pages/AuthCallBackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/"
                element={
                    <Layout showHero={true}>
                        <HomePage />
                    </Layout>
                }>
            </Route>
            <Route path="/auth-callback" element={<AuthCallBackPage />} />
            <Route
                path="/search/:city"
                element={
                    <Layout showHero={false}>
                        <SearchPage />
                    </Layout>}
            />
            <Route element={<ProtectedRoute />}>
                <Route
                    path="/user-profile"
                    element={
                        <Layout showHero={false}>
                            <UserProfilePage />
                        </Layout>}>
                </Route>
                <Route
                    path="/manage-restaurant"
                    element={
                        <Layout showHero={false}>
                            <ManageRestaurantPage />
                        </Layout>}>
                </Route>
            </Route>

            <Route path="*" element={<Navigate to={"/"} />}></Route>
        </Routes>
    )
}

export default AppRoutes;