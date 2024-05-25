import { json, useLoaderData, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "New React Router App" }];
};

export const loader = () => {
  console.log("object");
  return json("gola");
};

export default function Index() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to React Router 😉 (with Vite and Cloudflare)</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
          >
            Cloudflare Pages Docs - Remix guide
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            {data}
          </a>
        </li>
      </ul>
    </div>
  );
}
