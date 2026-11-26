import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
    activities: Activity[];
    selectedId?: string;
    onSelectActivity: (id: string) => void;
    onDeleteActivity: (id: string) => void;
};

export default function ActivityList({ activities, selectedId, onSelectActivity, onDeleteActivity }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map((activity) => (
                <ActivityCard
                    key={activity.id}
                    activity={activity}
                    isSelected={activity.id === selectedId}
                    onSelect={onSelectActivity}
                    onDelete={onDeleteActivity}
                />
            ))}
        </Box>
    )
}
