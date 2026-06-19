import "./globals.css";
import SalonSchema from "../components/SalonSchema";


export const metadata = {

icons:{
icon:"/logo.png"
},

title: "Eden Beauty Salon",

description:
"Professional hair, makeup and nail services. Book your beauty appointment today.",

};


export default function RootLayout({
children,
}:{
children:React.ReactNode
}){


return (

<html lang="en">

<body>

<SalonSchema />

{children}

</body>

</html>

)

}