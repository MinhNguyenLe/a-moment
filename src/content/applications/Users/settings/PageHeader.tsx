import { Typography, Button, Grid, Box } from "@mui/material";

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

function PageHeader() {
    const user = {
        name: "Catherine Pike",
        avatar: "/static/images/avatars/1.jpg",
    };

    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography variant="h3" component="h3" gutterBottom>
                    Transactions
                </Typography>
                <Typography variant="subtitle2">
                    {user.name}, these are your recent transactions
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    sx={{ mt: { xs: 2, md: 0 } }}
                    variant="contained"
                ><AddTwoToneIcon fontSize="small" />
                </Button>
                <Box display="flex" alignItems="center">
                    Others
                    <Box display="flex" alignItems="center" pl={0.3}>
                        <ExpandMoreTwoToneIcon fontSize="small" />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default PageHeader;
