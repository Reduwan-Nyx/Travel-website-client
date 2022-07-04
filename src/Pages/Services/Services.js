import useServices from "../../Hooks/useServices";
import Service from "../Service/Service";


const Services = () => {
   const [services] = useServices()
    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-gray-800 mb-24'>SERVICES</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto'>
                {
                    services.map(service => <Service 
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;