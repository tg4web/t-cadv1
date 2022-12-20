import useGetCurrentUser from "./useGetCurrentUser";
import Card from "../components/Card";

const IsAdmin = () => {
  const user = useGetCurrentUser();
  if (user) {
    const role = user.role;
    if (role === "admin") {
      return true;
    }
  }
  return false && (
    <div className="flex h-screen w-full bg-primary p-8">
      <Card
        html={
          <div className="">
            <p>You do not have permission to view this page</p>
          </div>
        }
      />
    </div>
  );
}

export default IsAdmin;