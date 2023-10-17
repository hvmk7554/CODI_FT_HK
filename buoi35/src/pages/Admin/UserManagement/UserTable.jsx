
import { styled } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListUser } from "../../../rtk/slices/authSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function UserTable() {
const {userData} = useSelector((state) => state.auth);
const dispatch = useDispatch();

useEffect( ()  =>{
 dispatch(getListUser());
},[])

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minwidth: 700, marginTop: "20px" }} 
                aria-label="customized table"
           >
        <TableHead>
                <TableRow>
                    <StyledTableCell align="left"> ID </StyledTableCell> 
                    <StyledTableCell align="left"> Avatar </StyledTableCell> 
                    <StyledTableCell align="left"> First Name </StyledTableCell> 
                    <StyledTableCell align="left"> Last Name </StyledTableCell>
                     <StyledTableCell align="left"> Email </StyledTableCell> 
                     <StyledTableCell align="center"> Action </StyledTableCell> 
                     </TableRow> 
            </TableHead>
            <TableBody>
                {userData.length>0 && userData.map((item) => (
                <StyledTableRow key={item.id}>
                    <StyledTableCell align="left">{item.id}</StyledTableCell> 
                    <StyledTableCell align="left">
                        <img
                            className="w-20"
                        src={item.avatar}
                        alt=""
                        />
                    </StyledTableCell>

                    <StyledTableCell align="left">{item.firstname}</StyledTableCell>
                    <StyledTableCell align="left">{item.lastname}</StyledTableCell>
                    <StyledTableCell align="left">{item.email}</StyledTableCell>
                    <StyledTableCell align="right">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-red-500 rounded flex justify-center items-center"> 
                                <EditIcon className="text-white" />
                            </div>
                            <div className="w-10 h-10 bg-red-700 rounded flex justify-center items-center"> 
                            <DeleteIcon className="text-white" />
                            </div>
                        </div>
                    </StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer >
  );
}