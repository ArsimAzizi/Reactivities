import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => setActivities(response.data))
      .catch(error => console.error('Error fetching activities:', error));
  }, [])

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(a => a.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleFormOpen = (id?: string) => {
    if (id) {
      handleSelectActivity(id);
    } else {
      handleCancelSelectActivity();
    }
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(activities.map(a => a.id === activity.id ? activity : a));
    } else {
      const newActivity = { ...activity, id: (activities.length + 1).toString() };
      setSelectedActivity(newActivity);
      setActivities([...activities, newActivity]);
    }
    setEditMode(false);
  }

  const handleDelete = (id: string) => {
    setActivities(activities.filter(a => a.id !== id));
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen} />

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          onSelectActivity={handleSelectActivity}
          onCancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>

  )
}

export default App
