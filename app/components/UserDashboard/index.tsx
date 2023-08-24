import {Box} from "@mui/material"
import {User} from "@prisma/client";
const UserDashboard = ({user} : {user: User}) => {
    return <Box>
        User Dashboard {user?.name}
    </Box>
}

export default UserDashboard;