import { redirect } from "next/navigation"

export default function LoginAdminRedirect() {
  // Support legacy/alternate path `/login/admin` by redirecting to canonical `/admin/login`
  redirect("/admin/login")
}
