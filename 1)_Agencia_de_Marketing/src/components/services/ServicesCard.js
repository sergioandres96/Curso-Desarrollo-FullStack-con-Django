function ServicesCard({data}){
    return(
        <div className="w-full p-8 h-96 lg:h-[200pm] bg-white shadow-xl hover:-translate-y-1 duration-300 ease-in-out">
            <div className="w-full" >
                <img src={data.img} className='w-9 h-9' />
                <h2 className="text-xl font-semibold text-gray-900 pt-8">{data.title}</h2>
                <p className="text-lg font-semibold text-gray-500 pt-4">{data.title}</p>



            </div>
        </div>
    )
}
export default ServicesCard