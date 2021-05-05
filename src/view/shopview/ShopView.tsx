import { useEffect, useState } from 'react' // Denna del är viktig att kunna för examination

export const ShopView = () => {
    const [count, setCount] = useState(0)

    /*useEffect(() => {
        alert('hej')
        return () => { alert('test test') }
    }, [count])*/

    return (
        <div>
            <h1 onClick={() => setCount(count + 1)}>{count}</h1>
        </div>
    )


}
