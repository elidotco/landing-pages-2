import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="bg-secondary-background absolute -bottom-1/5 border border-primary-lighten rounded-2xl flex flex-col gap-y-5 px-6 h-fit py-5  w-4/5 lg:w-1/3 md:left-15 xl:hidden">
      {/* user info */}
      <div className="flex item-center gap-x-6">
        {/* IMage */}
        <div className="h-16 w-16 rounded-full bg-primary"></div>
        <div className="flex flex-col ">
          <p>Micheal SMith</p>
          <p className=" flex">
            <span>4.8</span> <StarIcon className="w-4 text-primary" />
          </p>
        </div>
      </div>
      {/* user info end */}
      <p>
        I've discovered a whole new world of flavors. Learning to cook has never
        been this fun and engaging!
      </p>
    </div>
  );
};

export default ReviewCard;
