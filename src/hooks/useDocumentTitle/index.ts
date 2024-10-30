import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useDocumentTitle(title: string) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]); // Update title when location or title changes
}

export default useDocumentTitle;
