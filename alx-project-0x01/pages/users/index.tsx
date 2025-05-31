import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

const User: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="grid grid-cols-3 gap-2 ">
          {users?.map(
            (
              {
                name,
                email,
                phone,
                website,
                username,
                company,
                address,
                id,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                name={name}
                email={email}
                phone={phone}
                website={website}
                username={username}
                address={address}
                company={company}
                key={key}
                id={id}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default User;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}
