import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import Place from "@mui/icons-material/Place";
import { formatDate } from "../../../lib/util/date";

type Props = {
    activity: Activity;
    isSelected: boolean;
    onSelect: (id: string) => void;
    onDelete: (id: string) => void;
}

const metaRowSx = { display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' };

export default function ActivityCard({ activity, isSelected, onSelect, onDelete }: Props) {
    return (
        <Card sx={{
            borderRadius: 3,
            border: 2,
            borderColor: isSelected ? 'primary.main' : 'transparent',
            transition: 'border-color 150ms',
        }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h5" component="h2">
                    {activity.title}
                </Typography>
                <Box sx={metaRowSx}>
                    <AccessTime fontSize="small" />
                    <Typography variant="body2">{formatDate(activity.date)}</Typography>
                </Box>
                <Box sx={metaRowSx}>
                    <Place fontSize="small" />
                    <Typography variant="body2">{activity.city} / {activity.venue}</Typography>
                </Box>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    {activity.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Chip label={activity.category} variant="outlined" sx={{ textTransform: 'capitalize' }} />
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="contained" onClick={() => onSelect(activity.id)}>
                        View
                    </Button>
                    <Button color="error" variant="contained" onClick={() => onDelete(activity.id)}>
                        Delete
                    </Button>
                </Box>
            </CardActions>
        </Card>
    )
}
