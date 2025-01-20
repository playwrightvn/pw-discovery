// Typescript
type Post = {
    title: string,
    likeCount: number,
    commentCount: number,
    shareCount: number,
};

type Rank = { title: string, score: number, }

function getTop3Post(posts: Post[]): Rank[] { 
    return posts .map(post => ({ 
        title: post.title, 
        score: post.likeCount + post.commentCount * 3 + post.shareCount * 10 
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3); 
};