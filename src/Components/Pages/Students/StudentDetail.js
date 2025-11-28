import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input } from "../../Common/CommonComponents/Elements";
import { getAllRecords } from "../../Common/Services/CommonServices";

const StudentDetail = () => {
    const [student, setStudent] = useState({
        name: "John Doe",
        class: "10",
        email: "john.doe@email.com",
        phone: "9876543210",
        photo: "https://via.placeholder.com/150",
    });
    const [classes, setClasses] = useState([
        { value: '9', label: '9th Grade' },
        { value: '10', label: '10th Grade' },
        { value: '11', label: '11th Grade' },
        { value: '12', label: '12th Grade' },
    ]);

    useEffect(() => {
        GetRecords();
    }, []);

    const GetRecords = async () => {
        try {
            const response = await getAllRecords({ entity: 'classname' });
            setClasses(response.map(cls => ({ value: cls.id, label: cls.name })));
            console.log('Class Records:', response);
        } catch (error) {
            console.error('Error fetching student records:', error);
        }
    }

    const onChangeHandler = (e, label) => {
        const { name, value } = e.target;

        const key = label ? label : name;

        setStudent({
            ...student,
            [key]: value        // dynamic key works only with []
        });
    };

    return (
        <>
            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

                {/* Left Section (Details) */}
                <div className="md:col-span-2 space-y-4">
                    <Input label="Name" value={student.name} />
                    <Dropdown options={classes} label="Class" value={student.class} onChange={(e) => onChangeHandler(e,"class")} />
                    <Input label="Email" value={student.email} />
                    <Input label="Phone" value={student.phone} />
                </div>

                {/* Right Section (Photo) */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={student.photo}
                        alt="Student"
                        className="w-40 h-40 object-cover rounded-xl shadow-md border"
                    />
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
                <Button title='Save' />
                <Button title='Cancel' variant="secondary" />
            </div>
        </>
    );
};




export default StudentDetail;
