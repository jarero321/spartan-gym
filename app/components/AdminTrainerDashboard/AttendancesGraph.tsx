import React from 'react';
import {Box, Paper} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {Attendance} from "@prisma/client";

const AttendanceGraph = ({ attendanceData } : {
    attendanceData : Attendance[]
} ) => {
    // Process attendance data to create chart data
    const timeSlots = ['2023-08-23'];
    const presentCounts = timeSlots.map((timeSlot) =>
        attendanceData.filter((attendance: Attendance) => attendance.isPresent && attendance.date === timeSlot).length
    );
    const absentCounts = timeSlots.map((timeSlot) =>
        attendanceData.filter((attendance: Attendance) => !attendance.isPresent && attendance.date === timeSlot).length
    );

    const chartData = timeSlots.map((timeSlot, index) => ({
        timeSlot,
        present: presentCounts[index],
        absent: absentCounts[index],
    }));

    return (
        <Box component={'div'}>
            Attendances

        <Paper>
            <BarChart data={chartData}>
                <XAxis dataKey="timeSlot" />
                <YAxis />
                <CartesianGrid />
                <Tooltip />
                <Legend />
                <Bar dataKey="present" fill="rgba(75, 192, 192, 0.6)" />
                <Bar dataKey="absent" fill="rgba(255, 99, 132, 0.6)" />
            </BarChart>
        </Paper>
        </Box>
    );
};

export default AttendanceGraph;
