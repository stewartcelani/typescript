import {type ChangeEvent, type FormEvent, useState} from "react";
import {CourseGoal} from "../types";

interface NewGoalProps {
    onAddGoal: (goal: CourseGoal) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    const [goalTitle, setGoalTitle] = useState("");
    const [summary, setSummary] = useState("");

    function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setGoalTitle(event.target.value);
    }

    function handleSummaryChange(event: ChangeEvent<HTMLInputElement>) {
        setSummary(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const newGoal: CourseGoal = {
            id: Math.random(),
            title: goalTitle,
            description: summary,
        };

        onAddGoal(newGoal);

        setGoalTitle("");
        setSummary("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" value={goalTitle} onChange={handleTitleChange}/>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" value={summary} onChange={handleSummaryChange}/>
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    );
}
