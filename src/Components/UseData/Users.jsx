import React from "react";
import { useUserData } from "../../context/UserContext";
import {
  Paper,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TableBody,
} from "@mui/material";
import { useTheme } from "../../context/themeContext";
import { ascendingUser, descendingOrder } from "../Utils/utils";
import { TableBodyData } from "./TableBody";
import { FilterData } from "../FilterData";

export const Users = () => {
  const { state } = useUserData();
  const { users } = state;
  const { theme } = useTheme();

  return (
    <>
      <FilterData />
      <TableContainer component={Paper}>
        <Table
          className={
            theme === "light" ? "table-container-dark" : "table-container"
          }
        >
          <TableHead>
            <TableRow sx={{ borderBottom: "1.1px solid #cbd5e1" }}>
              {["Avatar", "ID", "Name", "EMAIL"].map((data) => {
                return (
                  <TableCell
                    key={data}
                    style={{
                      fontWeight: "bold",
                      color: theme === "light" ? "white" : "",
                    }}
                    align={data === "Features" ? "left" : "center"}
                  >
                    {data}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBodyData users={users} />
        </Table>
      </TableContainer>
    </>
  );
};
