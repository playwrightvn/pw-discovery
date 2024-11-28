import { test } from "@playwright/test";
interface StepsAnalysis {
    totalSteps: number;        // Tổng số bước trong tuần
    averageSteps: number;      // Trung bình mỗi ngày
    bestDay: number;           // Số bước cao nhất
    worstDay: number;          // Số bước thấp nhất
    daysAboveTarget: number;   // Số ngày đạt mục tiêu
    streak: number;            // Số ngày liên tiếp đạt mục tiêu
}

test('solution 10/11/2024', async () => {
    console.log(analyzeSteps([15000, 6000, 10000, 5500, 4000, 3000, 2000]));
    console.log(analyzeSteps([10000, 10000, 1000, 10000, 10000, 10000, 10000]));
})

function analyzeSteps(dailySteps: number[], target: number = 10000): StepsAnalysis {
    const totalSteps: number = dailySteps.reduce((total, curValue) => (total + curValue), 0);
    const averageSteps: number = ~~(totalSteps / dailySteps.length);
    const bestDay: number = Math.max(...dailySteps);
    const worstDay: number = Math.min(...dailySteps);
    const daysAboveTarget: number = dailySteps.filter((item) => {
        return item >= target;
    }).length;

    const streak: number = ((input: number[]) => {
        let maxCount: number = 0;
        let currentCount: number = 0;
        input.forEach(item => {
            currentCount = (item >= target) ? (currentCount + 1) : 0;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        });
        return maxCount;
    })(dailySteps);


    return {
        totalSteps,
        averageSteps,
        bestDay,
        worstDay,
        daysAboveTarget,
        streak
    }
}