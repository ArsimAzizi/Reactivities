import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { SyntheticEvent } from "react";
import { formatDate } from "../../../lib/util/date";
import { getCategoryImage, PLACEHOLDER_IMAGE } from "../../../lib/constants/categories";

type Props = {
    activity: Activity;
    onEdit: () => void;
    onCancel: () => void;
};

// Fall back to a placeholder when a category has no matching image.
const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    if (!img.src.endsWith(PLACEHOLDER_IMAGE)) img.src = PLACEHOLDER_IMAGE;
};

export default function ActivityDetails({ activity, onEdit, onCancel }: Props) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia
                component="img"
                src={getCategoryImage(activity.category)}
                alt={activity.category}
                onError={handleImageError}
                sx={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {activity.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'light', mb: 1 }}>
                    {formatDate(activity.date)}
                </Typography>
                <Typography variant="body1">
                    {activity.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
                <Button variant="contained" onClick={onEdit}>
                    Edit
                </Button>
                <Button color="inherit" onClick={onCancel}>
                    Cancel
                </Button>
            </CardActions>
        </Card>
    )
}
