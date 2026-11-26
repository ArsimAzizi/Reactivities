import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Group from "@mui/icons-material/Group";

type Props = {
    onCreateActivity: () => void;
};

const navLinks = ['Activities', 'About', 'Contact'];

const navButtonSx = { fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' };

export default function NavBar({ onCreateActivity }: Props) {
    return (
        <AppBar position="static" sx={{
            backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                    <Button color="inherit" sx={{ display: 'flex', gap: 2, textTransform: 'none' }}>
                        <Group fontSize="large" />
                        <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>
                            Reactivities
                        </Typography>
                    </Button>

                    <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                        {navLinks.map(link => (
                            <Button key={link} color="inherit" sx={navButtonSx}>
                                {link}
                            </Button>
                        ))}
                    </Box>

                    <Button size="large" variant="contained" color="warning" onClick={onCreateActivity}>
                        Create Activity
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
