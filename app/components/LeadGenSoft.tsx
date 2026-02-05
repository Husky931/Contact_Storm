import React from 'react';

const LeadGenSoftware = () => {
    return (
        <section className="pb-16 pt-0 bg-linear-to-b from-white to-blue-50/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                        <span className="mr-2">⚡</span>
                        Your 24/7 Lead Generation Engine
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Turn Prospects into Pipeline <span className="text-blue-600">While You Sleep</span>
                    </h2>

                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Imagine your most productive employee, supercharged. Our AI works tirelessly around the clock to generate qualified leads, fill your CRM, and accelerate growth—without coffee breaks, vacations, or quotas.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-blue-600 mb-2">10x</div>
                            <div className="text-gray-700 font-medium">Lead Volume</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                            <div className="text-gray-700 font-medium">Always Working</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
                            <div className="text-gray-700 font-medium">Qualified Leads</div>
                        </div>
                    </div>

                    {/* <div className="mt-12 flex justify-center">
                        <button
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                            aria-label="See how it works"
                        >
                            See It In Action
                            <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                        </button>
                    </div> */}
                </div>
            </div>
        </section>


    );
};

export default LeadGenSoftware;