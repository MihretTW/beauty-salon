export default function SalonSchema(){

return (

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({

"@context":"https://schema.org",

"@type":"BeautySalon",

"name":"Eden Beauty Salon",

"address":{

"@type":"PostalAddress",

"addressLocality":"Addis Ababa",

"addressCountry":"Ethiopia"

},

"telephone":"+251900000000",

"url":"https://yourwebsite.com"


})
}}
/>

)

}