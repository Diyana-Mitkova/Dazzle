import AdminTable from "@/src/components/admin-table/AdminTable";

export default async function Admin() {
  const res = await fetch("http://localhost:3000/api/jewelry", {
    cache: "no-store",
  });
  const jewelry = await res.json();

  return <AdminTable products={jewelry} />;
}
