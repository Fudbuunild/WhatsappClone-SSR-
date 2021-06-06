import React from 'react'
import { Circle } from 'better-react-spinkit';

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
                <img 
                    src="https://icons-for-free.com/iconfiles/png/512/communication+media+messenger+phone+social+speech+bubble+whatsapp-1320137108186587722.png" 
                    alt="" 
                    style={{ marginBottom: 10 }}
                    height={200}
                />
                <Circle color="#3CBC28" size={60} />
            </div>
        </center>
    )
}

export default Loading
