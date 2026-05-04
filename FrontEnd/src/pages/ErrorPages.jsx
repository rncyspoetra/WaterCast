import {
  Unauthorized401,
  Forbidden403,
  Error500,
} from "../components/ErrorComponent";
import MainLayout from "@/layouts/MainLayout";

const ErrorHandler = ({ error }) => {

  console.log("Masuk ke error")
  
  const status = error?.status || error?.response?.status;

  console.log(`Status : ${error}`)

  if (status == "401") return <Unauthorized401 />;
  if (status == "403") return <Forbidden403 />;
  if (status == "500") return <Error500 />;

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        <p>{error?.message || "Terjadi kesalahan"}</p>
      </div>
    </MainLayout>
  );
};

export default ErrorHandler;
