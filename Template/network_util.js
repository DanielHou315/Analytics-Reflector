// Get Client IP Address from 
function json(url) {
    return fetch(url).then(res => res.json());
}

let apiKey = "bc1f5dc15f2e275749ace397f80227f9a93c6763e9654f0672225a59";
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    // console.log(data.ip);
    // console.log(data.city);
    // console.log(data.country_code);
    // console.log(data.asn.name);
    document.getElementById('public_ip').innerHTML = data.ip;
    document.getElementById('city').innerHTML = data.city;
    document.getElementById('country').innerHTML = data.country_code;
    document.getElementById('isp').innerHTML = data.asn.name;
});

