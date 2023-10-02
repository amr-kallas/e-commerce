const storage={
    setMode(mode:string){
        localStorage.setItem("mode",mode)
    },
    getMode(){
        return localStorage.getItem("mode")
    }
}
export default storage