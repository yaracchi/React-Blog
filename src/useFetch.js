import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)  
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)//want to output it to the browser=> store in state
   
    useEffect(() => {
        const abortCont = new AbortController();//used to abort/stop/pause a fetch when needed
        //can use async function and await to fitch
        //get request        //its asynchronis
        setTimeout(() => { //simulate a real get request that takes time
            fetch(url, { signal : abortCont.signal}) //return a promise
                .then(res => {
                    
                    if(!res.ok){//check the reqponse object to see if there is any error
                       //throw our own error
                       throw Error('couldnt fetch the data for that ressource')
                    }
                    return res.json() //its asynchronis
                }) //access promise
                .then( (data) => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err =>
                     {
                         if ( err.name === 'AbortError') {
                         //recognize the abort error, we dont update state
                            console.log("abort fetch")
                         }else {
                            setError(err.message)
                            setIsPending(false)
                         }
                    })
        }, 1000);
        return () => abortCont.abort() //throws an err in case we stoped the fetch and it throws it to be catched
        

    }, [url]);
return {data,isPending,error}
}

export default useFetch