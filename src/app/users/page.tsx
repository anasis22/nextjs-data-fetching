type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UserPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users123");
  const users = await response.json();
  const names = users.map((el: User) => {
    return el.name;
  });
  console.log(names);
  return (
    <div className="grid grid-cols-2 gap-2 p-4">
      {users.map((user: User) => {
        return (
          <div
            key={user.id}
            className="flex items-center justify-between rounded-lg shadow bg-white p-4"
          >
            <div className="flex flex-col">
              <h2 className="text-zinc-500 text-sm">{user.name}</h2>
              <p className="text-zinc-500 text-sm">{user.username}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-light text-zinc-500 text-sm">{user.email}</h2>
              <p className="font-light text-zinc-500 text-sm">{user.phone}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
