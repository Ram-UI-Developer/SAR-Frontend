import React, { useState } from 'react'
import { Button, Input } from '../../Common/CommonComponents/Elements'

const ClassDetail = () => {

    const [classObj, setClassObj] = useState({
        name: ""
    })

    return (
        <div>
            <div className="md:col-span-2 space-y-4">
                <Input label="Name" value={classObj.name} />

            </div>
            <div className="flex justify-center gap-4 mt-4">
                <Button title='Save' />
                <Button title='Cancel' variant="secondary" />
            </div>
        </div>
    )
}

export default ClassDetail