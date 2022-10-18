import React from "react";
import { TableCell, TableRow, Table, TableBody } from "@mui/material";
import { useTheme } from "../../context/themeContext";

export const TableBodyData = ({ users }) => {
  const { theme } = useTheme();
  return (
    <>
      <TableBody>
        {users.map((rowData) => (
          <TableRow key={rowData.id}>
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ color: theme === "light" ? "white" : "" }}
            >
              <img src={rowData.avatar} alt="image-of-user" />
            </TableCell>
            <TableCell
              align="center"
              style={{ color: theme === "light" ? "white" : "" }}
            >
              {rowData.id}
            </TableCell>
            <TableCell
              align="center"
              style={{ color: theme === "light" ? "white" : "" }}
            >
              {rowData.first_name}
              {rowData.last_name}
            </TableCell>
            <TableCell
              align="center"
              style={{ color: theme === "light" ? "white" : "blue" , textDecoration:"underline"}}
            >
              {rowData.email}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};
