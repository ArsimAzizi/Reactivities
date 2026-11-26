import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";

type Props = {
    activities?: Activity;
    closeForm: () => void;
    submitForm: (activity: Activity) => void
};


export default function ActivityForm({ activities, closeForm, submitForm }: Props) {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        const formData = new FormData(event.currentTarget);

        const data: { [key: string]: FormDataEntryValue } = {}
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (activities) {
            data.id = activities.id;
        }

        submitForm(data as unknown as Activity);
    }

    return (
        <Paper sx={{ borderRadius: 3, p: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                Create Activity
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField name="title" label="Title" variant="outlined" fullWidth defaultValue={activities?.title} />
                <TextField name="description" label="Description" variant="outlined" fullWidth multiline rows={3} defaultValue={activities?.description} />
                <TextField name="category" label="Category" variant="outlined" fullWidth defaultValue={activities?.category} />
                <TextField name="date" label="Date" variant="outlined" fullWidth type="date" defaultValue={activities?.date} />
                <TextField name="city" label="City" variant="outlined" fullWidth defaultValue={activities?.city} />
                <TextField name="venue" label="Venue" variant="outlined" fullWidth defaultValue={activities?.venue} />
                <Box sx={{ display: 'flex', justifyContent: 'end', gap: 3 }}>
                    <Button variant="contained" color="inherit" onClick={closeForm}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="success">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}
