const insert = require('../db_functions/insert')
const read = require('../db_functions/read')
const remove = require('../db_functions/delete')
const update = require('../db_functions/update')

 
const addTestData = async (req)=>{
    try{
                const addTest = await insert.addTestData(req);
                return addTest
    }
    catch(e){
        console.log(e)
        throw (e)
    }
}
const getTestData = async (req)=>{
    try{
                const addTest = await read.getTestData(req);
                return addTest
    }
    catch(e){
        console.log(e)
        throw (e)
    }
}

module.exports ={
    addTestData,
    getTestData 
}