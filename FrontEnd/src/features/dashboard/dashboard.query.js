import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../../services/DashboardService";

export const useDashboardQuery = () => {
  const { token } = useSelector((state) => state.auth);

  return useQuery({
    queryKey: ["dashboard", token],
    queryFn: () => getDashboardData(token),
    enabled: !!token,
  });
};