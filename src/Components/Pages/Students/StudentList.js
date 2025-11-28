import React, { useEffect, useState } from 'react'
import Table from '../../Common/Table/Table'
import { getAllRecords } from '../../Common/Services/CommonServices';
import { Edit, Delete } from '../../Common/CommonComponents/Icons';
import Modal from '../../Common/CommonComponents/Modal';
import StudentDetail from './StudentDetail';


const StudentList = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    GetRecords();
  }, []);

  const GetRecords = async () => {
    try {
      const response = await getAllRecords({ entity: 'student' });
      setData(response); 
      console.log('Student Records:', response);
    } catch (error) {
      console.error('Error fetching student records:', error);
    }
  }

  const onAddStudent = () => {
    console.log("Add Student Clicked");
    setOpen(true);
    // Implement the logic to add a new student
  }
  const onClose = () => {
    setOpen(false);
  }

  const onEditHandler = () => {
    console.log("Edit Clicked");
    setOpen(true);
  }

const columns = [
    {
      Header: 'S.No',
      accessor: 's.no',
      Cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Class',
      accessor: 'classname',
    },
    {
      Header: 'Phone Number',
      accessor: 'phonenumber',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div>
          <Edit onClick={onEditHandler} />
          <Delete />
        </div>
      ),
    }
  ]
  

  return (
    <div>
      <h1>Student List Page</h1>
      <div className='mt-4'>
        <Table columns={columns} data={data} onClick={onAddStudent} />
      </div>
      <div>
        <Modal isOpen={open} title='Student Details' onClose={onClose} width='max-w-4xl' >
          <StudentDetail />
        </Modal>
      </div>
    </div>
  )
}

export default StudentList