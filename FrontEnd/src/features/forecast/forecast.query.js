import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getForecastData } from "../../services/ForecastService";

export const useForecastQuery = () => {
  const { token } = useSelector((state) => state.auth);

  return useQuery({
    queryKey: ["forecast", token],
    queryFn: () => getForecastData(token),
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  });
};