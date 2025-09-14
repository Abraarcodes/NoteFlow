import React from 'react'
import {frequentlyAskedQuestions} from '../../../utils/content'
import { useState } from 'react'
import FAQList from './FAQList'

function FAQs() {

  const [category,setCategory]=useState("General")
  const [activeQuestion, setActiveQuestion]= useState(null)

  //()
  const categoryObj = frequentlyAskedQuestions.filter((obj)=> obj.category === category)
  .at(0);

  const questionsArr = categoryObj.questions;

  const handleQuestionClick = (id) =>{
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id)
  } 

  const handleCategoryClick=(category)=>{
    setActiveQuestion(null)
    setCategory(category)
  }


  return (
    <section className='bg-gradient-to-bottom justify-items-center'>
        <div className='max-w-[90rem] py-32'>
            <h2 className='text-6xl/18 font-semibold tracking-tighter text-primary-50 mb-8 text-center'>Frequently asked questions</h2>
            <div className='text-xl/loose font-light mb-8'>
                <p className='text-primary-100 text-center'>The most commonly asked questions about NoteFlow. <br />Have any other questions?{" "} 
                    <a href="#" className='underline decoration-1 underline-offset-3'>Chat with our expert tech team  
                    </a>
                </p>
            </div>
            <ul className='flex mb-16 flex-wrap justify-center gap-x-3 gap-y-4'>
                {frequentlyAskedQuestions.map((obj)=>(
                    <li key={obj.id}>
                        <button
                        onClick={()=>handleCategoryClick(obj.category)} className={`border-primary-50 text-primary-50 transition-properties cursor-pointer rounded-full px-8 py-3.5 border-2 text-lg/8 ${obj.category === category && "bg-primary-500 text-primary-1300 border-primary-500 primary-glow"} ${obj.category !== category && "hover:bg-primary-50 hover:text-primary-1300" }`}>
                            {obj.category}
                        </button>
                    </li>
                ))}
            </ul>
            <FAQList
              category={category}
              questions={questionsArr}
              activeQuestion={activeQuestion}
              handleQuestionClick={handleQuestionClick}
            />
        </div>
    </section>
  )
}

export default FAQs
