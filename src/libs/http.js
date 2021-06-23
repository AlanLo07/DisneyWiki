class Http{
    static instance = new Http();

    get = async (url) => {
        try {
            let req = await fetch(url);
            let json = req.json();
            return json;
        }catch (e) {
            console.log("http error: ",e);
            throw Error(err);
        }
    }

    post = async (url, body) => {
        try {
            let req = await fetch(url,{
                method: 'POST',
                body
            });
            
            let json = req.json();
            return json;
        }catch (e) {
            console.log("http error: ",e);
            throw Error(e);
        }
    }
}

export default Http;