type Post = {
    title: string;
    likeCount: number;
    commentCount: number;
    shareCount: number;
};

function getTop3Post(posts: Post[]): { title: string, score: number }[] {
    const result: { title: string, score: number }[] = posts.map(post => {
        const score: number = post.likeCount + (post.commentCount * 3) + (post.shareCount * 10);
        return { title: post.title, score: score };
    });

    return result.sort((a, b) => b.score - a.score).slice(0, 3);
}

const post1: Post[] = [
    { title: "Phụ nữ hiện đại", likeCount: 10, commentCount: 5, shareCount: 2 },
    { title: "Người mẹ Việt Nam", likeCount: 20, commentCount: 10, shareCount: 5 },
    { title: "Những người phụ nữ tiên phong", likeCount: 5, commentCount: 2, shareCount: 1 },
    { title: "Phụ nữ trong công nghệ", likeCount: 18, commentCount: 12, shareCount: 7 },
    { title: "Sức mạnh của phụ nữ", likeCount: 8, commentCount: 7, shareCount: 4 }
];

console.log(getTop3Post(post1));

const posts2: Post[] = [
    { title: "Sự kiên cường của phụ nữ", likeCount: 15, commentCount: 8, shareCount: 3 },
    { title: "Chị tôi", likeCount: 25, commentCount: 15, shareCount: 6 },
    { title: "Người bà yêu thương", likeCount: 5, commentCount: 4, shareCount: 1 }
];

console.log(getTop3Post(posts2));

const posts3: Post[] = [
    { title: "Hành trình của mẹ", likeCount: 8, commentCount: 7, shareCount: 4 },
    { title: "Phụ nữ trong công nghệ", likeCount: 18, commentCount: 12, shareCount: 7 }
];

console.log(getTop3Post(posts3));
