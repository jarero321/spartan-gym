import {Box} from "@mui/material";
import {User} from "@prisma/client";

const AdminTrainerDashboard = ({user} : {user: User}) => {

    return <Box>
        Hello world {user?.name}
    </Box>
}

export default AdminTrainerDashboard;