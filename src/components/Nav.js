function Nav(){
    const handleSignOut = () => {
        console.log('qwe')
        localStorage.removeItem('username')
        window.location.reload()
    }
    return(<div style={{backgroundColor:'#3b2a50',color:'white',padding:'12px'}}>
    <ul>
        <li><h1>Mssg</h1></li>
        <li style={{float:'right',marginRight:'5%',paddingTop:'8px'}} onClick={handleSignOut}><button style={{color:'white',border:'none',backgroundColor:'#3b2a50',fontSize:'16px'}} onClick={handleSignOut}>Sign Out</button></li>
    </ul>
    </div>)
}

export default Nav;