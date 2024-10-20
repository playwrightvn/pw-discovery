type Post = {
  title: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
};

function getTop3Post(posts: Post[]): { title: string, score: number }[] {
  // Tính điểm cho từng bài viết
  const postsWithScores = posts.map(post => {
    const score = post.likeCount * 1 + post.commentCount * 3 + post.shareCount * 10;
    return { title: post.title, score };
  });

  // Sắp xếp các bài viết theo điểm từ cao đến thấp
  postsWithScores.sort((a, b) => b.score - a.score);

  // Trả về top 3 bài viết
  return postsWithScores.slice(0, 3);
}

const posts: Post[] = [
  { title: "Hành trình của mẹ", likeCount: 8, commentCount: 7, shareCount: 4 },
  { title: "Phụ nữ trong công nghệ", likeCount: 18, commentCount: 12, shareCount: 7 }
];

const top3 = getTop3Post(posts);
console.log(top3);