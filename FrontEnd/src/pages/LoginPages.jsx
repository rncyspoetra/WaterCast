import { useState, useEffect } from "react";
import AuthLayout from "../layouts/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/Logo_Login.png";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../stores/authSlice";

const LoginPages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth,
  );

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message || "Login gagal");
    }

    if (isSuccess) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [isSuccess, dispatch, navigate, isError, message]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      return toast.warning("Kolom tidak boleh kosong", {
        richColors: true,
      });
    }

    dispatch(LoginUser(form));
  };

  return (
    <AuthLayout>
      <div className="text-center mb-6">
        <img src={logo} alt="logo" className="w-24 mx-auto mb-3" />
      </div>

      <div className="space-y-4">
        <div className="text-center ">
          <h1 className="text-xl font-semibold">Sign In</h1>
          <p className="text-sm text-gray-500">Masuk ke akun Anda</p>
        </div>

        <div className="space-y-3">
          <Label>Username</Label>
          <Input
            placeholder="Username"
            name="username"
            className="border-gray-300 p-5 text-sm"
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-3">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Kata Sandi"
            name="password"
            className="border-gray-300 p-5 text-sm"
            onChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-indigo-900 to-indigo-600  text-white"
        >
          {isLoading ? (
            <>
              <Spinner className="w-4 h-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Masuk"
          )}
        </Button>
      </div>
    </AuthLayout>
  );
};

export default LoginPages;
