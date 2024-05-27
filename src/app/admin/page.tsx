"use client";
export default function AdminPage() {
  const handleAdminLoginClick = () => {
    alert("Running admin login function handler...");
  };
  return (
    <main>
      <p>Admin page</p>
      <fieldset>
        <legend>Login credentials</legend>
        <label htmlFor="admin-name">Admin name</label>
        <input id="admin-password"></input>
        <br />
        <label htmlFor="admin-password">Admin password</label>{" "}
        <input id="admin-password"></input>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => {
            handleAdminLoginClick();
          }}
        >
          Submit
        </button>
      </fieldset>
    </main>
  );
}
