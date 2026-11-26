import { Container } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  const { activities, isLoading, error, createActivity, updateActivity, deleteActivity } = useActivities();

  // Store only the id and derive the activity, so edits/deletes never leave a stale copy on screen.
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [editMode, setEditMode] = useState(false);
  const selectedActivity = activities.find(a => a.id === selectedId);

  const handleSelectActivity = (id: string) => {
    setSelectedId(id);
    setEditMode(false);
  };

  const handleCancelSelectActivity = () => setSelectedId(undefined);

  const handleOpenForm = (id?: string) => {
    setSelectedId(id);
    setEditMode(true);
  };

  const handleCloseForm = () => setEditMode(false);

  const handleSubmitForm = (values: ActivityFormValues) => {
    if (selectedId) {
      updateActivity(selectedId, values);
    } else {
      setSelectedId(createActivity(values).id);
    }
    setEditMode(false);
  };

  const handleDeleteActivity = (id: string) => {
    deleteActivity(id);
    if (id === selectedId) {
      setSelectedId(undefined);
      setEditMode(false);
    }
  };

  return (
    <>
      <NavBar onCreateActivity={() => handleOpenForm()} />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <ActivityDashboard
          activities={activities}
          isLoading={isLoading}
          error={error}
          selectedActivity={selectedActivity}
          editMode={editMode}
          onSelectActivity={handleSelectActivity}
          onCancelSelectActivity={handleCancelSelectActivity}
          onOpenForm={handleOpenForm}
          onCloseForm={handleCloseForm}
          onSubmitForm={handleSubmitForm}
          onDeleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  )
}

export default App
