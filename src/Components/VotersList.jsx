function VotersList(props){
    return(
    
            <section className="bg-white shadow-lg my-20 mx-32 ">
            <div className="ml-32 inline-flex py-5">
                {/* <img src="/src/assets/person.jpg" alt="person image" className="w-10 h-10 border border-black rounded-full" /> */}
                <img src={props.image} alt="person image" className="w-10 h-10 border border-black rounded-full" />
                <div>
                    <h3 className="pl-6">{props.name}</h3>
                    <h3 className="pl-6">{props.designation}</h3>
                </div>
            </div>
            
            
        </section>

        
       
    )
}

export default VotersList