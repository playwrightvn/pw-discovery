type Post = {
    title: string;
    likeCount: number;
    commentCount: number;
    shareCount: number;
};

type PostWinner = {
    title: string,
    totalScore: number
}

function getTop3Post(posts: Post[]): PostWinner[] {
    const calculateScorePost: PostWinner[] = posts.map((post) => {
        const totalScore: number = post.likeCount + (post.commentCount * 3) + (post.shareCount * 10);
        return {title: post.title, totalScore};
    });
    const result: PostWinner[] = calculateScorePost.sort((a:PostWinner, b:PostWinner) => b.totalScore - a.totalScore);
    return result.slice(0,3)
}

const posts: Post[] = [
    { title: "Hành trình của mẹ", likeCount: 8, commentCount: 7, shareCount: 4 },
    { title: "Phụ nữ trong công nghệ", likeCount: 18, commentCount: 12, shareCount: 7 }
];

const top3 = getTop3Post(posts);
console.log(top3);
// Kết quả mong đợi:
// [
//   { title: 'Phụ nữ trong công nghệ', score: 124 },
//   { title: 'Người mẹ Việt Nam', score: 100 },
//   { title: 'Sức mạnh của phụ nữ', score: 69 }
// ]