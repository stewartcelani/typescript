import CourseGoal from "./CourseGoal.tsx";
import {CourseGoal as TCourseGoal} from "../types.ts";
import InfoBox from "./InfoBox.tsx";

interface CourseGoalListProps {
    goals: TCourseGoal[];
    onDelete: (id: number) => void;
}

export default function CourseGoalList({goals, onDelete}: CourseGoalListProps) {
    if (goals.length === 0) return (
        <InfoBox mode="hint">You have no course goals yet. Start adding some!</InfoBox>
    )


    return (
        <>
            {goals.length >= 4 && <InfoBox mode="warning" severity="medium">You have a lot of goals! Slow down!</InfoBox>}
            <ul>
                {goals.map(goal => (
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    )
}