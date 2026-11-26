import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { categoryOptions } from "../../../lib/constants/categories";
import { toDateTimeLocalValue } from "../../../lib/util/date";

type Props = {
    activity?: Activity;
    onCancel: () => void;
    onSubmit: (values: ActivityFormValues) => void;
};

export default function ActivityForm({ activity, onCancel, onSubmit }: Props) {
    const isEdit = Boolean(activity);

    // Keep an existing activity's category selectable even if it isn't one of the presets.
    const options = activity && !categoryOptions.some(o => o.value === activity.category)
        ? [...categoryOptions, { value: activity.category, label: activity.category }]
        : categoryOptions;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const field = (name: keyof ActivityFormValues) => String(formData.get(name) ?? '').trim();

        onSubmit({
            title: field('title'),
            description: field('description'),
            category: field('category'),
            date: field('date'),
            city: field('city'),
            venue: field('venue'),
        });
    };

    return (
        <Paper sx={{ borderRadius: 3, p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom color="primary">
                {isEdit ? 'Edit Activity' : 'Create Activity'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField name="title" label="Title" required fullWidth defaultValue={activity?.title} />
                <TextField name="description" label="Description" required fullWidth multiline rows={3}
                    defaultValue={activity?.description} />
                <TextField name="category" label="Category" required fullWidth select
                    defaultValue={activity?.category ?? ''}>
                    {options.map(option => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                </TextField>
                <TextField name="date" label="Date" required fullWidth type="datetime-local"
                    defaultValue={toDateTimeLocalValue(activity?.date)}
                    slotProps={{ inputLabel: { shrink: true } }} />
                <TextField name="city" label="City" required fullWidth defaultValue={activity?.city} />
                <TextField name="venue" label="Venue" required fullWidth defaultValue={activity?.venue} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    <Button variant="contained" color="inherit" onClick={onCancel}>
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
