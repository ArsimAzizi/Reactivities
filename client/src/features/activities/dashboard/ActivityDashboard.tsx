import { Grid } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

type Props = {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    onSelectActivity: (id: string) => void;
    onCancelSelectActivity?: () => void;
    openForm?: (id?: string) => void;
    closeForm?: () => void;
    editMode?: boolean;
    submitForm: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
};

export default function ActivityDashboard({ activities, selectedActivity, onSelectActivity, onCancelSelectActivity,
    openForm, closeForm, editMode, submitForm, deleteActivity
}: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList activities={activities}
                    onSelectActivity={onSelectActivity} 
                    deleteActivity={deleteActivity}
                    />
            </Grid>
            <Grid size={5}>
                {selectedActivity && !editMode && (
                    <ActivityDetails
                        activities={[selectedActivity]}
                        onCancelSelectActivity={onCancelSelectActivity} openForm={openForm} />
                )}
                {editMode && selectedActivity && <ActivityForm activities={selectedActivity} closeForm={closeForm ?? (() => { })} submitForm={submitForm} />}
            </Grid>
        </Grid>
    )
}
