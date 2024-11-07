import { useState } from "react"

export default function Shop(){

    const [options,setOption] = useState("");


const handleChange=(e)=>{
  setOption(e.target.value);
}

    return(
        <>
        <section className="bg-pink-400 m-5 p-3 md:shadow rounded  bg-green text-white " onChange={handleChange}>
     <div className="flex"> 
        <select name="" id="" className="ml-auto p-2 m-3 rounded bg-gray-300 font-bold text-black " >
         <option value="Select">Select</option>
            <option value="location">Location</option>
            <option value="time">Shop Opening Time</option>
            <option value="feedback">FeedBack</option>
         </select>
         
         
         </div>
         {options==='location'&& <p className="tracking-widest leading-10 tracking-widest leading-10 text-2xl italic font-bold">SSPDL Navalur,-60344 , Chennai</p>}
         {options==='time'&& <p className="tracking-widest leading-10 tracking-widest leading-10 text-2xl italic font-bold"> Monday TO Saturday Morning 9.00Am to 5.30Pm</p>}

         {options==='feedback'&& <textarea className="p-4 m-3 rounded tracking-widest leading-10 text-2xl italic font-bold" placeholder="Enter your Feedback Here... "></textarea>}
         {options==="Select"&& 
         <div><h1 className="text-2xl text-brown text-center m-8 font-bold italic ">Our Shop</h1>
         <p className="tracking-widest leading-10">Welcome to Our shop!
         At , we believe that shopping should be an enjoyable experience. 
         Founded in 2024, our shop has been dedicated to providing high-quality products and exceptional customer service. We curate a wide range of items, from [product categories] to [product categories], ensuring that you find exactly what you need. Our mission is to create a space where you can discover 
         unique products that inspire you. Thank you for choosing us for your shopping needs!</p></div>
            }

        </section>
        
        </>
    )
}