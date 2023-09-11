
'use client'

export default function ErorrWrapper({error}:{error:Error}){


    return <h1>Oops!!!{error.message}</h1>
}
