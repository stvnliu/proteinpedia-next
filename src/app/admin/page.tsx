"use client";
export default function AdminPage() {
  const handleAdminLoginClick = async () => {
    type AdminLoginResponse = {
      success: string;
      authKey: string;
      validUntil: number;
    };
    alert("Running admin login function handler...");
    const dataRaw = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({
        adminName:
          (document.getElementById("admin-name") as HTMLInputElement).value,
        adminPassword:
          (document.getElementById("admin-password") as HTMLInputElement).value,
      }),
    });
    const requestBody = await dataRaw.json() as AdminLoginResponse;
    if (requestBody.success) {
      location.assign(`/api/backend?auth=${requestBody.authKey}`);
    } else alert("NO");
  };
  return (
    <main>
      <p>Admin page</p>
      <fieldset>
        <legend>Login credentials</legend>
        <label htmlFor="admin-name">Admin name</label>
        <input id="admin-name"></input>
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
