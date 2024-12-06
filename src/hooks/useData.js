import {works} from "../components/DataBase/DataBase"

function useData(id){
    return works.find((work)=>{ return work.id == id})
}

export default useData;