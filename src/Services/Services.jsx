import React from "react";

export const Services = () => {
  return (
    <div>
      <h1 className=" font-extrabold text-center text-2xl pt-6 pb-6">Services</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mx-8">
        <div className="max-w-sm max-h-sm rounded overflow-hidden border shadow-lg hover:text-blue-500">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Design and Learn</div>
            <p className="text-gray-700 text-base">
            Gulf Crest Builders offers a comprehensive "Design and Build" service that covers the entire
                            construction process, from conceptualization to project completion. This includes innovative
                            design, quality construction, and seamless project execution.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded border  overflow-hidden shadow-lg">
         
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">Renovations and Remodeling</div>
            <p className="text-gray-700 text-base hyphens-auto">
            Our "Renovations and Remodeling" service focuses on rejuvenating existing spaces, both
                            residential and commercial. Our meticulous attention to detail and design expertise ensures
                            a transformation that enhances the value and functionality of the property.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden border shadow-lg">
         
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Construction Management</div>
            <p className="text-gray-700 text-base">
            Gulf Crest Builders excels in "Construction Management," overseeing all aspects of
                            construction projects, including scheduling, budgeting, quality control, and safety
                            compliance. We are committed to delivering projects on time and within budget.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden border shadow-lg">
         
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Interior Design</div>
            <p className="text-gray-700 text-base">
            Our "Interior Design" service caters to creating captivating and functional interior spaces
                            that align with our clients' preferences. From material selection to layout and furnishings,
                            we focus on every detail to craft harmonious and inviting environments.
            </p>
          </div>
        </div>
      </div>
      {/* first div end */}
    </div>
  );
};
export default Services;
