// API Reference ->Quick Access -> READ - 
const JSON_BIN_BASE_URL = "https://api.jsonbin.io/v3";
const JSON_BIN_ID = "69391b26d0ea881f401ee45c";
const MASTER_KEY = "";

async function loadData() {

    try {
        const config = {
            "headers": {
                "Content-Type": "application/json",
                "X-Master-key": MASTER_KEY
            }
        }
        const response = await axios.get(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/latest`, config);
        console.log(response.data);
    } catch (e){
        // return blank arrary if errors 
        return []
    }


}