import React, { useState } from 'react'
import { easeIn, motion } from 'motion/react'
import FAQ from './FAQ';

function FAQList({category,questions,activeQuestion,handleQuestionClick}) {
  const [inView, setInView] = useState(false);

  return (
    <motion.ul
      className='m-auto flex max-w-[51.625rem] flex-col gap-y-14'  
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      key={category}
      variants={{
        hidden :{opacity:0},
        visible:{
          opacity:1,
          transition:{
            staggerChildren:0.25,
            ease:"easeIn"
          }
        }
      }}
      whileInView={{opacity:1}}
      onViewportEnter={()=>setInView(true)}
      onViewportLeave={()=>setInView(false)}
      viewport={{once:false, amount:"100%"}}
    >
      {questions.map((question)=>(
        <FAQ
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  )
}

export default FAQList
