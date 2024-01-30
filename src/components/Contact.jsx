import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="flex flex-col justify-center max-w-screen-lg h-full mx-auto">

            <div className="pb-8">
                <p className="text-4xl inline border-b-4 font-bold border-gray-500 ">Contact</p>
                <p className="py-6">Submit the form to get in touch with me</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/e70b3a38-df70-4cc8-aa38-fcc33fb9ca47" className=" flex flex-col w-full md:w-1/2" method="POST">

                    <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <input type="email" name="email" placeholder="Enter Your Email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <textarea  placeholder="Enter Your Message" name="message" id="" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" rows="10"></textarea>

                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
