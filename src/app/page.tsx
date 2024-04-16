import Link from "next/link";
import { db } from "../server/db";

const mockUrls = [
  "https://utfs.io/f/a13f6962-8f8e-43f8-a499-80205ac169d1-xu3ckx.png",
  "https://utfs.io/f/021fed47-7e88-49c0-869c-b2387ff317d9-xtfuk9.jpg",
  "https://utfs.io/f/77eb0caf-b4f1-44f9-9db5-c258ba74ec16-xu5eph.jpeg",
  "https://utfs.io/f/1f325bf6-65eb-46b0-99fa-d8974942d450-xc019m.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
