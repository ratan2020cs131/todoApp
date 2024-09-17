export const sendResponse = ({
    res,
    status='200',
    message='Success',
    data={}
})=>{
    res.status(status).send({message,data})
}