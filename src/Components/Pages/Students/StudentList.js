import React, { memo, useEffect, useState } from 'react'
import Table from '../../Common/Table/Table'
import { getAllRecords } from '../../Common/Services/CommonServices';
import { Edit } from '../../Common/CommonComponents/Icons';


const StudentList = () => {
  const [data, setData] = useState([]);
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
          <Edit />
          <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
        </div>
      ),
    }
  ]
  

  return (
    <div>
      <h1>Student List Page</h1>
      <div className='mt-4'>
        <Table columns={columns} data={data} />
      </div>
    </div>
  )
}

export default StudentList