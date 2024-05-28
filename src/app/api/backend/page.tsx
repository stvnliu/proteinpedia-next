import { AdminBackendLoginData, PageData } from "@/app/types/pageTypes";
import { MongoClient } from "mongodb";
const mongoUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(mongoUrl);
export default async function AdminBackendPage(
  { searchParams }: { searchParams: { auth: string } },
) {
  const doc = await client.db("proteinpedia").collection("cred").findOne({
    authKey: searchParams.auth,
  }) as AdminBackendLoginData;
  const documentsList = await client.db("proteinpedia").collection("pages")
    .find().toArray();
  return (
    <div>
      <pre>Hello backend, {doc.authKey} valid until {new Date(doc.validUntil).toLocaleString()}</pre>
      <main>
        <h1>Content management backend</h1>
        <h2>Current documents</h2>
        <ul>
          {documentsList.map((doc) => {
            const page = doc as PageData;
            return (
              <li key={page._id.toString()}>
                <a href={`/pages/info/${page.key}`}>{page.title}</a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
