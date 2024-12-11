import React from 'react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import {motion} from 'framer-motion'
const Banner = () => {
    return (
      <div className="bg-[#0354eb42] p-10 flex md:flex-row flex-col items-center md:justify-between py-10">
        <div className="md:w-3/5">
          <h1 className="text-5xl font-semibold">
            The <motion.div
              initial={{ x: 15 }}
            //   animate={{ x: 0 }}
              animate={{color:['#1d89ec','#051fe5','#085fd5'], x: 0 }}
              
              transition={{ duration: 1 ,
                repeat: Infinity
              }}
              className="text-primary"
              style={{ display: "inline-block" }}
            >
              Easiest Way
            </motion.div> <br />
            To Get Your{" "}
            <motion.div
              initial={{ x: 0 }}
              animate={{ color:['#1d89ec','#051fe5','#085fd5'],x: 15 }}
              
              transition={{ duration: 1 ,
                repeat: Infinity
              }}
              className="text-primary"
              style={{ display: "inline-block" }}
            >
              New Job
            </motion.div>
          </h1>
        </div>
        <div className='md:w-2/5 flex md:flex-row flex-col'>
          <motion.img 
          animate={{ x: -50}}
          
          transition={{ duration: 2 ,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeOut",
          }}
          
          src={banner1} alt=""  className='w-52 h-32 rounded-t-3xl rounded-br-3xl border-blue-600 border-l-4 border-b-4'/>
          <motion.img 
          animate={{ y: -30}}
          
          transition={{ duration: 2 ,
            repeat: Infinity,
            ease: "easeOut",
            repeatDelay: 1
          }}
          src={banner2} alt="" className='w-52 h-32 rounded-b-3xl rounded-tr-3xl border-blue-600 border-r-4 border-t-4'/>
        </div>
      </div>
    );
  };
  
  export default Banner;