type Post = {
  title: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
};
function getTop3Post(posts: Post[]): { title: string, score: number }[] {
  const scoredPosts = posts.map(post => ({
    title: post.title,
    score: post.likeCount + post.commentCount * 3 + post.shareCount * 10
  }));

  return scoredPosts.sort((a, b) => b.score - a.score);
}

const posts: Post[] = [
  { title: "Phụ nữ hiện đại", likeCount: 10, commentCount: 5, shareCount: 2 },
  { title: "Người mẹ Việt Nam", likeCount: 20, commentCount: 10, shareCount: 5 },
  { title: "Những người phụ nữ tiên phong", likeCount: 5, commentCount: 2, shareCount: 1 },
  { title: "Phụ nữ trong công nghệ", likeCount: 18, commentCount: 12, shareCount: 7 },
  { title: "Sức mạnh của phụ nữ", likeCount: 8, commentCount: 7, shareCount: 4 }
];

const top3 = getTop3Post(posts);
console.log(top3);