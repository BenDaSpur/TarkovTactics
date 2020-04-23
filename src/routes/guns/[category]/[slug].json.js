import guns from "../../guns.js";

// import posts from "./_posts.js.js";

const lookup = new Map();

const categ = new Map();

guns.forEach((post) => {
  // console.log("post: " + post.name.toLowerCase());
  lookup.set(
    post.name.toLowerCase().replace(/ /g, "_"),
    decodeURI(decodeURI(post.name))
  );
  lookup.set("gunname", post.name);
  // console.log(JSON.stringify(decodeURI(decodeURI(post.name))));
  // console.log(lookup);
});

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { category } = req.params;

  // console.log(category);

  if (lookup.has(category)) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        category: lookup.get(category),
        slug: req.params.slug,
      })
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
