import BaseErrorLayout from "../pages/ErrorPages";
import { Lock, ShieldAlert, ServerCrash, SearchX } from "lucide-react";

export function Unauthorized401() {
  return (
    <BaseErrorLayout
      title="401 - Unauthorized"
      description="Sesi kamu sudah habis atau belum login. Silakan login kembali untuk melanjutkan."
    />
  );
}

export function Forbidden403() {
  return (
    <BaseErrorLayout
      title="403 - Forbidden"
      description="Kamu tidak memiliki izin untuk mengakses halaman ini."
    />
  );
}

export function NotFound404() {
  return (
    <BaseErrorLayout
      title="404 - Not Found"
      description="Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan."
    />
  );
}

export function Error500() {
  return (
    <BaseErrorLayout
      title="500 - Server Error"
      description="Terjadi kesalahan pada server. Silakan coba beberapa saat lagi."
    />
  );
}
