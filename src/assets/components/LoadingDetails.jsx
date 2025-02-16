import { Bars } from "react-loader-spinner";

export default function LoadingDetails() {
    return (
        <div className="p-4 overflow-hidden sm:ml-64 min-h-screen">
            <div className="container mt-5 relative">
                <div className="bg-white absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
                    <Bars
                        height="80"
                        width="80"
                        color="#F29724"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            </div>
        </div>
    )
}
