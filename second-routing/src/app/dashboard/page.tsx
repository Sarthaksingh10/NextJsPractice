
import React from "react";

export default function Parallelroutes() {
  return (
    <div className="w-3/4">   
     <div>
        This is the example of parallel routes. Parallel routes are defined
        using slots slots are the folders with @ as the prefix. Each slot is
        then passed as prop to layout.tsx file. Also we have covered unmatched
        routes in this by creating a default page for each unmatched route which
        will help to prevent 404 error. If there will be no default page for the
        unmatched routes the application will show 404 error.
        </div>
    </div>
  );
}
