
const PlanCard = ({ name, price, type, content }) => (

    <div className='flex justify-between items-center flex-col px-10 py-8 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-3 feedback-card'>
      <h3 className="font-poppins font-medium text-[21px] leading-[32px] text-white my-5">{name}</h3>
  
      <div className="flex flex-row">
        
        <div className="flex flex-col ml-4">
          <p className="font-poppins font-semibold text-[38px] leading-[32px] text-secondaryCol my-3 ">{price}</p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">{type}</p>
          <p className="font-poppins font-normal text-[16px] leading-[32px] text-white my-5 ">{content}</p>
        </div>
      </div>
    </div>

  )

export default PlanCard