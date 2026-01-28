import React from 'react'
import BtnPrimary from '../btn/BtnPrimary'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaSendEmail } from '../../schema/schemaSendEmail'
import emailjs from "emailjs-com";
import { toast } from 'react-toastify'

const From = () => {
    const {register , handleSubmit , formState:{errors , isSubmitting},
    reset,
    }= useForm(
        {
            resolver : zodResolver(schemaSendEmail)
        }
    );


    const onSubmit = async(data) => {
       try {
        await emailjs.send(
            "service_um1jdcw",
            "template_pscwk38",
            {
               name:data.name,
               email:data.email,
               phone:data.phone,
               message:data.message,
               time:new Date().toLocaleString() 
            },
            "UwE-UPJhN6ELLFpLA"

        )
        toast.success("Message sent successfully 🚀")
        console.log('it is done');
        reset();
        
       }catch(error) {
        toast.error("Failed to send message ❌")
        
       }
        
    }


  return (
    <div>
         <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                  <div className="space-y-1 flex flex-col">
                    <label className="text-sm  text-text " >Name <span className='text-red-300'>*</span></label>
                    <input
                    {...register("name")}
                    type="text" className=" mt-2 bg-primary/20 border-white/20 border rounded-2xl  px-3 py-2 text-text focus:outline-none " placeholder="Name" />
                  {
                    errors.name && <p className='text-red-400 text-xs'>{errors.name.message}</p>
                  }
                  </div>


                  <div className="space-y-1 flex flex-col">
                    <label className="text-sm  text-text " >Email <span className='text-red-300'>*</span></label>
                    <input
                    {...register("email")}
                    className=" mt-2 bg-primary/20 border-white/20 border rounded-2xl  px-3 py-2 text-text focus:outline-none " placeholder="Email" />
                   {
                    errors.email && <p className='text-red-400 text-xs'>{errors.email.message}</p>
                  }
                  </div>

                    </div>

                     <div className="space-y-1 flex flex-col">
                    <label className="text-sm  text-text " >Phone <span className='text-red-300'>*</span></label>
                    <input 
                    {...register("phone")}
                    type='tel' className=" mt-2 bg-primary/20 border-white/20 border rounded-2xl  px-3 py-2 text-text focus:outline-none " placeholder="Phone" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm  text-text " >Message <span className='text-red-300'>*</span></label>
                    <textarea 
                    {...register("message")}
                    rows={6} className="w-full mt-2 bg-primary/20 border-white/20 border rounded-2xl  px-6 py-2 text-text focus:outline-none resize-none" placeholder="How can I help you ?" />
                  {
                    errors.message && <p className='text-red-400 text-xs'>{errors.message.message}</p>
                  }
                  </div>
                  <div >
                  <BtnPrimary disabled={isSubmitting} size="sm">{isSubmitting ? "Seding..." : "Send Message"}</BtnPrimary>
                  </div>
                </form>
    </div>
  )
}

export default From