import {useState} from "react";

import goalsImg from './assets/goals.jpg';
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import {CourseGoal} from "./types.ts";
import NewGoal from "./components/NewGoal.tsx";


export default function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal(goal: CourseGoal) {
        setGoals(prevGoals => {
            return [
                ...prevGoals,
                goal
            ]
        });
    }
    
    function handleDeleteGoal(goalId: number)  {
        setGoals(prevGoals => {
            return prevGoals.filter(goal => goal.id !== goalId);
        });
    }

    return (
        <main>
            <Header image={{src: goalsImg, alt: 'React Goals'}}>
                <h1>Your Course Goals</h1>
            </Header>
            <NewGoal onAddGoal={handleAddGoal}/>
            <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
        </main>
    )
}
