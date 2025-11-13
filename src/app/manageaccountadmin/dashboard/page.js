"use client";
import { useRouter } from "next/navigation";
import "../../Styles/Dashboard.css";
import { AdminLayout } from "@/app/components/AdminLayout";

export default function Dashboard() {
  const router = useRouter();

  // const handleNavigate = (title) => {
  //   const path = routes[title];
  //   if (path) router.push(path);
  // };

  return (
    <AdminLayout>
      <div className="Dashboard-container">
        <h1 className="Dashboard-heading">Welcome to DashBoard</h1>
        <h3 className="Dashboard-subheading"> </h3>
        <div className="cards-grid">


          <div className="card">
            <h4>Messages From Website</h4>
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/manageaccountadmin/messagesforme");
              }}
            >
              See Messages  
            </button>
          </div>
          

        </div>
      </div>
    </AdminLayout>
  );
}
