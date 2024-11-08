export default function Imgshow() {

    const imgarr = [
        "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];

    return (
        <>
            <input type="search" placeholder="Search Here ..." className="p-3 m-3 shadow-custom-shadow rounded md:w-[15%]" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-5 bg-yellow-300 shadow-custom-shadow rounded justify-center items-center p-3">
                {imgarr.map((src, index) => (
                    <img
                        key={index}
                        className="w-full aspect-square  object-cover hover:shadow-custom-shadow rounded-sm"
                        src={src}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>

        </>
    );
}
