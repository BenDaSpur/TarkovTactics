import maps from "./names.js";

const contents = JSON.stringify(
  maps.map(post => {
    return {
      title: post.name,
      slug: post.slug
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
