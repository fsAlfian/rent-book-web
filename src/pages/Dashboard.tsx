
import { useEffect } from 'react';
import { setPageTitle } from '../store/themeConfigSlice';
import { useDispatch } from 'react-redux';


const KnowledgeBase = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Knowledge Base'));
    });


    return (
        <div>
            <div className="mt-10">
                <h3 className="mb-6 text-xl font-bold md:text-3xl">Popular Topics</h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                        <div className="max-h-56 overflow-hidden rounded-md">
                            <img src="/assets/images/knowledge/image-1.jpg" alt="..." className="w-full object-cover" />
                        </div>
                        <h5 className="text-xl dark:text-white">Excessive sugar is harmful</h5>
                        <div className="flex">
                            <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                                <img src="/assets/images/profile-1.jpeg" className="h-11 w-11 object-cover" alt="profile1" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-1.5 font-semibold dark:text-white">Alma Clark</h4>
                                <p>06 May</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                        <div className="max-h-56 overflow-hidden rounded-md">
                            <img src="/assets/images/knowledge/image-2.jpg" alt="..." className="w-full object-cover" />
                        </div>
                        <h5 className="text-xl dark:text-white">Creative Photography</h5>
                        <div className="flex">
                            <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                                <img src="/assets/images/profile-2.jpeg" className="h-11 w-11 object-cover" alt="profile1" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-1.5 font-semibold dark:text-white">Alma Clark</h4>
                                <p>06 May</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                        <div className="max-h-56 overflow-hidden rounded-md">
                            <img src="/assets/images/knowledge/image-3.jpg" alt="..." className="w-full object-cover" />
                        </div>
                        <h5 className="text-xl dark:text-white">Plan your next trip</h5>
                        <div className="flex">
                            <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                                <img src="/assets/images/profile-3.jpeg" className="h-11 w-11 object-cover" alt="profile1" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-1.5 font-semibold dark:text-white">Alma Clark</h4>
                                <p>06 May</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                        <div className="max-h-56 overflow-hidden rounded-md">
                            <img src="/assets/images/knowledge/image-4.jpg" alt="..." className="w-full object-cover" />
                        </div>
                        <h5 className="text-xl dark:text-white">My latest Vlog</h5>
                        <div className="flex">
                            <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                                <img src="/assets/images/profile-4.jpeg" className="h-11 w-11 object-cover" alt="profile1" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-1.5 font-semibold dark:text-white">Alma Clark</h4>
                                <p>06 May</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowledgeBase;
