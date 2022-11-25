import { Box, Container, Card, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";

import { styled } from "@mui/material/styles";
import Logo from "src/components/LogoSign";

const OverviewWrapper = styled(Box)(
    () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
    return (
        <OverviewWrapper>
            <Helmet>
                <title>Tokyo Free White React Typescript Admin Dashboard</title>
            </Helmet>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" py={5} alignItems="center">
                    <Logo />
                </Box>
                <Card sx={{ p: 10, mb: 10, borderRadius: 4 }}>
                    <Link href="/master1/goal1">Goal 1</Link>
                    <Link href="/master1/goal2">Goal 2</Link>
                    <Link href="/master1/goal3">Goal 3</Link>
                </Card>
            </Container>
        </OverviewWrapper>
    );
}

export default Overview;
