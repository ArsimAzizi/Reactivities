import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Group from "@mui/icons-material/Group";

type Props = {
    openForm: () => void;
};

const navButtonSx = { fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' };

export default function NavBar({ openForm }: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
            }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{
                        display: 'flex', justifyContent: 'space-between'
                    }}>
                        <Box>
                            <Button color="inherit" sx={{ display: 'flex', gap: 2, textTransform: 'none' }}>
                                <Group fontSize="large" />
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                    Reactivities
                                </Typography>
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <Button color="inherit" sx={navButtonSx}>
                                Activities
                            </Button>
                            <Button color="inherit" sx={navButtonSx}>
                                About
                            </Button>
                            <Button color="inherit" sx={navButtonSx}>
                                Contact
                            </Button>
                        </Box>
                        <Button size="large" variant="contained" color="warning"
                            onClick={openForm}>
                            Create Activity
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
