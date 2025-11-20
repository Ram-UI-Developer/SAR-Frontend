import { request } from "../Utilities/ApiHelper"

export const LoginService = (props) => {
    const {body} = props
    return request({
        endpoint: "institute/login",
        method: "POST",
        body: body
    })
}   

export const CreateRecord = (props) => {
    const {body,entity} = props
    return request({
        endpoint: `${entity}/save`,
        method: "POST",
        body: body
    })
}

export const getAllRecords = (props) => {
    const {entity} = props
    return request({
        endpoint: `${entity}/getAll`,
        method: "GET"
    })
}