import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [users, setUsers]: any = useState(null);
  return (
    <>
      <button
        onClick={async () => {
          const result = await fetch("/api/agenda", {
            method: "GET",
          });
          const data = await result.json();
          console.log(data);
          setUsers(data.data);
        }}
      >
        LLAMAR AGENDA
      </button>
      {users && (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
