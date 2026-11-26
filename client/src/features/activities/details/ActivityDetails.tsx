import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
    activities: Activity[];
    onCancelSelectActivity?: () => void;
    openForm?: (id?: string) => void;
};

export default function ActivityDetails({ activities, onCancelSelectActivity, openForm }: Props) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia
                component='img'
                src={`/images/categoryImages/${activities[0].category}.jpg`}
            />
            <CardContent>
                <Typography variant="h5">
                    {activities[0].title}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "light" }}>
                    {activities[0].date}
                </Typography>
                <Typography variant="body1">
                    {activities[0].description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" onClick={() => openForm?.(activities[0].id)}>
                    Edit
                </Button>
                <Button color="inherit" onClick={onCancelSelectActivity}>
                    Cancel
                </Button>
            </CardActions>
        </Card>
    )
}
