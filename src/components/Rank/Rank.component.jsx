import React, { useState, useEffect } from 'react'

const Rank = ({ name, entries }) => {

    const [ emoji, setEmoji ] = useState("")

    const generateEmoji = async entries => {
        try {
            const response = await fetch(`https://8owsjbn958.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
            const data = await response.json()
            console.log(data)
            setEmoji(data.input)
        } catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        generateEmoji(entries)
    }, [entries])

    return (
        <div>
            <div className='white f3'>
                {`${name}, your current entry count is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
            <div className='white f1'>
                {`Rank Badge: ${emoji}`}
            </div>
      </div>
    )
}

export default Rank
