import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import { publicRoutes } from "../../routes";

const AppRouter: FC = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {publicRoutes.map(({ path, Component }) => 
                    <Route key={path} path={path} Component={Component}/>
                )}
            </Route>
        </Routes>
    );
};

export default AppRouter;