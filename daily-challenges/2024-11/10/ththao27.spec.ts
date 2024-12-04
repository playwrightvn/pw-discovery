interface StepsAnalysis {
    totalSteps: number;        // Tổng số bước trong tuần
    averageSteps: number;      // Trung bình mỗi ngày
    bestDay: number;           // Số bước cao nhất
    worstDay: number;          // Số bước thấp nhất
    daysAboveTarget: number;   // Số ngày đạt mục tiêu
    streak: number;            // Số ngày liên tiếp đạt mục tiêu
}

function analyzeSteps (dailySteps: number[], target: number = 10000): StepsAnalysis {
    const totalSteps = dailySteps.reduce((sum, currentValue) => sum + currentValue, 0);
    const averageSteps = Math.floor(totalSteps / dailySteps.length);
    const bestDay = Math.max(...dailySteps);
    const worstDay = Math.min(...dailySteps);
    const daysAboveTarget = dailySteps.filter((day) => { 
        return day >= target;
    }).length;
    const countStreak = (daylySteps: number[]): number => {
        let currentStreak: number = 0;
        let maxStreak: number = 0;
        daylySteps.forEach((day) => {
            if (day >= target) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
            } else {
                currentStreak = 0;
            }
        });
        return maxStreak;
    };

    return {
        totalSteps,
        averageSteps,
        bestDay,
        worstDay,
        daysAboveTarget,
        streak: countStreak(dailySteps)
    };
};

console.log('1: ', analyzeSteps([10000, 10000, 10000, 10000, 10000, 10000, 10000]));
console.log('2: ', analyzeSteps([5000, 6000, 7000, 5500, 4000, 3000, 2000]));

const steps = [12000, 11000, 9000, 8000, 10500, 7000, 11500];
console.log(analyzeSteps(steps));