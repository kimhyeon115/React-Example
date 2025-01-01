import React from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    marginTop: '10px',
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
}

const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/64/64?random=1',
    'name': '티모',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/64/64?random=2',
    'name': '케이틀린',
    'birthday': '970412',
    'gender': '여자',
    'job': '원딜러'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/64/64?random=3',
    'name': '바이',
    'birthday': '950521',
    'gender': '여자',
    'job': '정글러'
  }
]

function App() {

  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
