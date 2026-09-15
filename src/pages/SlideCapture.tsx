import { useEffect, useState } from "react";
import { CPSlideRenderer } from "@/components/cp-deck/CPSlideRenderer";
import { cpDeck } from "@/data/cp-roadmap-deck";

const SlideCapture = () => {
  const getIndex = () => Number(new URLSearchParams(window.location.search).get("index"));
  const [requested, setRequested] = useState(getIndex);
  useEffect(() => {
    const update = () => setRequested(getIndex());
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  const index = Number.isInteger(requested) ? requested : -1;
  const slide = cpDeck[index];

  if (!slide) return null;

  return (
    <div className="pptx-capture-root" data-pptx-slide="ready">
      <CPSlideRenderer slide={slide} />
    </div>
  );
};

export default SlideCapture;