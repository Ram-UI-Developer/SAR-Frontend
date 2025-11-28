import React, { useEffect, useState } from 'react'
import Modal from '../../Common/CommonComponents/Modal'
import Table from '../../Common/Table/Table'
import ClassDetail from './ClassDetail'
import { getAllRecords } from '../../Common/Services/CommonServices'
import { Delete, Edit } from '../../Common/CommonComponents/Icons'

const ClassList = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([])

   useEffect(() => {
      GetRecords();
    }, []);
  
    const GetRecords = async () => {
      try {
        const response = await getAllRecords({ entity: 'classname' });
        setData(response); 
        console.log('class Records:', response);
      } catch (error) {
        console.error('Error fetching student records:', error);
      }
    }
  
    const onAddStudent = () => {
      
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
      <h1>Class List</h1>
      <div className='mt-4'>
        <Table columns={columns} data={data} onClick={onAddStudent} />
      </div>
      <div>
        <Modal isOpen={open} title='Class Details' onClose={onClose} width='max-w-2xl' >
          <ClassDetail />
        </Modal>
      </div>
    </div>
  )
}

export default ClassList