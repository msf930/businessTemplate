"use client";

import { useEffect, useRef, useState } from "react";

import { MpSdk, setupSdk } from "@matterport/sdk";


export default function Index() {
    const [sdk, setSdk] = useState();
    const container = useRef(null);
    let started = false;
  
    useEffect(() => {
      if (!started && container.current) {
        started = true;
        setupSdk("sc3ghz9xy85t2f8butbyesxec", {
          container: container.current,
          space: "K5rdsMmwfxL",
          iframeQueryParams: { qs: 1 },
        }).then(setSdk);
      }
    }, []);
    return (
        <div className="w-full h-full">
            <div className="w-full h-full" ref={container}></div>
        </div>
    );
}