let Instagram = require("instagram-nodejs-without-api");
Instagram = new Instagram();

function getHashtags() {
  Instagram.getCsrfToken()
    .then((csrf) => {
      Instagram.csrfToken = csrf;
    })
    .then(() => {
      //search posts by hashtag "Eurovision"
      Instagram.searchBy("hashtag", "regalo").then((r) => {
        let posts =
          r.entry_data.TagPage[0].graphql.hashtag.edge_hashtag_to_media.edges;
        if (posts) {
          //console.log(posts.length);
          for (let i = 1; i < posts.length; i++) {
            console.log(
              "\n" +
                "Número: " +
                i +
                "\n" +
                posts[
                  i
                ].node.edge_media_to_caption.edges[0].node.text.toString() +
                "\n"
            );

            // Links to media url
            console.log(posts[i].node.display_url);
            console.log("\n");
            console.log(
              "COMENTARIOS: " +
                posts[i].node.edge_media_to_comment.count +
                " | " +
                "LIKES: " +
                posts[i].node.edge_liked_by.count
            );
            console.log(posts[i].node.accessibility_caption);
          }
        }
      });
    })
    .catch();
}

getHashtags();

//  posts[i].node.edge_media_to_caption.edges[0].node.text.toString()
