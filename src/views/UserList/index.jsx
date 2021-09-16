import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserList } from '../../store/actions/user';
import { useDispatch } from 'react-redux';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddUser from './addUser';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 5,
      padding: theme.spacing(2, 4, 3),
    },
    link: {
        fontSize: 20,
        marginRight: 20
    }
  }));

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'taiKhoan', headerName: 'Tai khoan', width: 150 },
    { field: 'hoTen', headerName: 'Họ tên', width: 150 },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'soDt',
      headerName: 'Số điện thoại',
      width: 170,
      editable: true,
    },
    {
      field: 'matKhau',
      headerName: 'Mật khẩu',
      width: 150,
      editable: true,
    },
    {
      field: 'maLoaiNguoiDung',
      headerName: 'Loại người dùng',
      width: 200,
      editable: true,
    },
    
  ];
const Index = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };



const rows = useSelector(state => state.user.userList)
rows.map((item, index)=>{
    item.id = index
})
console.log(rows)

    return (
        <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        <Link
             className={classes.link}
      component="button"
      variant="body2"
      color="secondary"
      onClick={handleOpen}
    >
      Them nguoi dung
    </Link>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
                <AddUser></AddUser>
            </div>
          </Fade>
        </Modal>
    </div>
    );
};

export default Index;