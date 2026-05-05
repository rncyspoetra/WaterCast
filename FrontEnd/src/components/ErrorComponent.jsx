import BaseErrorLayout from "../pages/ErrorPages";
import { Lock, ShieldAlert, ServerCrash } from "lucide-react";

export function Unauthorized401() {
  return (
    <BaseErrorLayout
      icon={<Lock className="w-7 h-7 text-amber-500" />}
      iconColor="text-amber-500"
      title="401 - Unauthorized"
      description="Sesi kamu sudah habis atau belum login. Silakan login kembali untuk melanjutkan."
    />
  );
}

export function Forbidden403() {
  return (
    <BaseErrorLayout
      icon={<ShieldAlert className="w-7 h-7 text-red-500" />}
      iconColor="text-red-500"
      title="403 - Forbidden"
      description="Kamu tidak memiliki izin untuk mengakses halaman ini."
    />
  );
}

export function Error500() {
  return (
    <BaseErrorLayout
      icon={<ServerCrash className="w-7 h-7 text-slate-600" />}
      iconColor="text-slate-600"
      title="500 - Server Error"
      description="Terjadi kesalahan pada server. Silakan coba beberapa saat lagi."
    />
  );
}
