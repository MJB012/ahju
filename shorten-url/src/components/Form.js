import React, { useState } from 'react';
import validator from 'validator';
import Footer from './Footer';
const urlShortener = (url) => {
    const obj = {};
    let shortURL = "ahju./" + url.replace(/[^a-z]/g,'').slice(-4);
   if(!obj[shortURL]){
      obj[shortURL] = url;
   };
   return shortURL;
   }
const Form = () => {
    const [url, setUrl] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validator.isURL(url)) {
            setErrorMsg('')
            console.log(urlShortener(url));            
        } else {
            setErrorMsg('url is required')
        }
    }
    return (
        <>
        <div className='form-content'>
            <form>
                <div>
                    <input
                        // type = 'url'
                        id = 'url'
                        name = 'url'
                        value = {url}
                        onChange = {(e) => setUrl(e.target.value)}
                     />
                     <button type = 'submit' onClick={handleSubmit}>Get Link</button>
                </div>
                <small>{errorMsg}</small>
            </form>
            <Footer />
        </div>
        </>
    )
}

export default Form;