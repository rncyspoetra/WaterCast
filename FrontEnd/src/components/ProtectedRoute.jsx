import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getMe } from "../stores/authSlice";
import LoadingHandler from "./LoadingHandler";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  const { token, user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (isLoading || (token && !user)) {
    return <LoadingHandler />;
  }

  return children;
};

export default ProtectedRoute;
