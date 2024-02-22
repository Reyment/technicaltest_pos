import React from 'react'
import { RxCaretRight } from 'react-icons/rx'
import FaqComponent from '../components/FaqComponent'

const About = () => {
  return (
    <section id="about" className='min-h-screen'>
      <section className='pb-8' id='Hero-cart'>
        <div className="  absolute z-30 px-20 pt-32">
          <h1 className='text-[#FFFFFF] text-6xl font-normal'>About</h1>
          <div className='flex gap-3'>
            <div className='flex items-center'>
              <p className='text-[#CCC4B4]  pt-6 pb-6  '>Home</p>
              <RxCaretRight className='ml-1 text-[#CCC4B4]' size={20} />
            </div>

            <div className='flex items-center'>
              <p className='text-[#FFFFFF]  pt-6 pb-6  '>About</p>
              <RxCaretRight className='ml-1 text-[#FFFFFF]' size={20} />
            </div>
          </div>

        </div>
        <div className='w-full relative'>
          <img
            src="/images/herocta.png"
            alt=""
            className='w-full  object-cover'
          />
          <img
            src="/effects/producteffect.png"
            alt=""
            className='w-full h-full  object-cover absolute top-0 left-0 z-20'
          />
        </div>
      </section>
      <div className='py-12'>
        <div className='flex px-16  py-16'>
          <div className='px-8 pt-12 w-1/2 text-pretty '>
            <h3 className='text-[48px] font-bold text-[#642C0C]  '>Transforming spaces with modern furniture that combines style and functionality.</h3>
            <p className='text-[#CCC4B4] w-[450px] mt-4'>Our brand was born out of a passion for creating modern furniture that elevates living spaces. With a focus on innovative design and quality craftsmanship, we strive to provide furniture that not only looks great but also enhances the way you live.</p>
          </div>
          <div className='w-1/2'>
            <img src="/images/contentabout.png" className='rounded-lg' alt="" />
          </div>

        </div>
      </div>
      <section id='teams'>
        <div className=' p-16 px-20 text-center '>
          <h2 className='text-[#642C0C] text-4xl font-semibold py-2'>Meet Our Team</h2>
          <p className='text-sm text-[#000000]'>Get to know the talented individuals behind our furniture.</p>

          <div className='grid grid-cols-3 gap-5 py-8'>
            <div className=' p-3'>
              <div className='px-4 py-5'>
                <div className='justify-center flex'>
                  <img src="/images/person1.png" className='rounded-full mt-4 ' alt="Person" />

                </div>
                <h4 className='text-[#642C0C] font-bold text-2xl mt-4'>John Doe</h4>
                <p className='text-sm text-[#C0772C]'>CEO, Product Designer</p>
                <p className='text-sm text-[#676767] py-1 font-normal mt-3'>Jane's strategic thinking and creative approach help us reach new customers.</p>

              </div>
            </div>
            <div className=' p-3'>
              <div className='px-4 py-5'>
                <div className='justify-center flex'>
                  <img src="/images/person1.png" className='rounded-full mt-4 ' alt="Person" />

                </div>
                <h4 className='text-[#642C0C] font-bold text-2xl mt-4'>John Doe</h4>
                <p className='text-sm text-[#C0772C]'>CEO, Product Designer</p>
                <p className='text-sm text-[#676767] py-1 font-normal mt-3'>Jane's strategic thinking and creative approach help us reach new customers.</p>

              </div>
            </div>
            <div className=' p-3'>
              <div className='px-4 py-5'>
                <div className='justify-center flex'>
                  <img src="/images/person1.png" className='rounded-full mt-4 ' alt="Person" />

                </div>
                <h4 className='text-[#642C0C] font-bold text-2xl mt-4'>John Doe</h4>
                <p className='text-sm text-[#C0772C]'>CEO, Product Designer</p>
                <p className='text-sm text-[#676767] py-1 font-normal mt-3'>Jane's strategic thinking and creative approach help us reach new customers.</p>

              </div>
            </div>

          </div>
        </div>
      </section>)

      <FaqComponent/>



    </section>
  )
}

export default About