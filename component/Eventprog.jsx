export const Eventprog=()=>{
    const handleGPClick=(e)=>{
        e.stopPropagation()
        console.log("Grand Parent clicked");
    }
    const handlePClick=(e)=>{
        e.stopPropagation()
        console.log("Parent clicked");
    }
    const handleCClick=(e)=>{
        e.stopPropagation()
        console.log("Child clicked");
    }
    return(
        <>
            <div style={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40vh',
                    backgroundColor: 'red',
                    zIndex:1,
                }

                
            }onClick={handleGPClick}>
                <div
                        style={{
                        textAlign: 'center',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        backgroundColor: 'green',
                        zIndex:2,
                    }}onClick={handlePClick}>
                    <div style={
                        {
                            fontSize: '24px',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            backgroundColor: 'yellow',
                            padding: '10px',
                            zIndex:4
                        }
                    }onClick={handleCClick}>Click the different div and Check Console</div>
                </div>
            </div>
        </>
    )
}