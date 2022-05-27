export const CheckIdinArray = (arr, id) => {
    let isPresent = false
    arr.forEach(element => {
        if(element._id === id){
            isPresent = true
        }
    })
    return isPresent
}