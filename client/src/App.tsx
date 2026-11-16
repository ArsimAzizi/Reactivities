import { List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [activity, setActivity] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => setActivity(response.data))
      .catch(error => console.error('Error fetching activities:', error));
  }, [])

  return (
    <>
      <Typography variant='h3'> Welcome to Reactivities </Typography>

      <List>
        {activity.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
          </ListItem>
        ))}
      </List>

    </>

  )
}

export default App
