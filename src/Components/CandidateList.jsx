function CandidateList(props) {
    return (
        <section className="bg-white shadow-lg my-5 mx-5 p-5 text-left flex items-center rounded-lg">
            {/* Candidate Image */}
            <img src={props.image} alt="person image" className="w-10 h-10 border border-black rounded-full" />

            {/* Candidate Details */}
            <div className="pl-4">
                <h3 className="text-black font-semibold">{props.name}</h3>
                <h3 className="text-gray-600">{props.designation}</h3>
            </div>
        </section>
    );
}

export default CandidateList;
