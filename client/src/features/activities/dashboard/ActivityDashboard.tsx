import { Alert, Box, CircularProgress, Grid } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

type Props = {
    activities: Activity[];
    isLoading: boolean;
    error: string | null;
    selectedActivity?: Activity;
    editMode: boolean;
    onSelectActivity: (id: string) => void;
    onCancelSelectActivity: () => void;
    onOpenForm: (id?: string) => void;
    onCloseForm: () => void;
    onSubmitForm: (values: ActivityFormValues) => void;
    onDeleteActivity: (id: string) => void;
};

export default function ActivityDashboard({
    activities, isLoading, error, selectedActivity, editMode,
    onSelectActivity, onCancelSelectActivity, onOpenForm, onCloseForm, onSubmitForm, onDeleteActivity
}: Props) {
    const renderList = () => {
        if (isLoading) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                    <CircularProgress aria-label="Loading activities" />
                </Box>
            );
        }
        if (error) return <Alert severity="error">{error}</Alert>;
        if (activities.length === 0) {
            return <Alert severity="info">No activities yet. Create one to get started!</Alert>;
        }
        return (
            <ActivityList
                activities={activities}
                selectedId={selectedActivity?.id}
                onSelectActivity={onSelectActivity}
                onDeleteActivity={onDeleteActivity}
            />
        );
    };

    return (
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 7 }}>
                {renderList()}
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
                {/* Keep the side panel in view while scrolling the list on larger screens */}
                <Box sx={{ position: { md: 'sticky' }, top: { md: 24 } }}>
                    {editMode ? (
                        // key remounts the uncontrolled form so its default values match the current activity
                        <ActivityForm
                            key={selectedActivity?.id ?? 'new'}
                            activity={selectedActivity}
                            onCancel={onCloseForm}
                            onSubmit={onSubmitForm}
                        />
                    ) : selectedActivity && (
                        <ActivityDetails
                            activity={selectedActivity}
                            onEdit={() => onOpenForm(selectedActivity.id)}
                            onCancel={onCancelSelectActivity}
                        />
                    )}
                </Box>
            </Grid>
        </Grid>
    )
}
